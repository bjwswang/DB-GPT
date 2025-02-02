from typing import List, Dict
import logging

from pilot.scene.base_chat import BaseChat
from pilot.scene.base import ChatScene
from pilot.configs.config import Config
from pilot.base_modules.agent.commands.command import execute_command
from pilot.base_modules.agent.commands.command_mange import ApiCall
from pilot.base_modules.agent import PluginPromptGenerator
from pilot.common.string_utils import extract_content
from .prompt import prompt
from pilot.component import ComponentType
from pilot.base_modules.agent.controller import ModuleAgent

CFG = Config()

logger = logging.getLogger("chat_agent")


class ChatAgent(BaseChat):
    chat_scene: str = ChatScene.ChatAgent.value()
    chat_retention_rounds = 0

    def __init__(self, chat_param: Dict):
        if not chat_param["select_param"]:
            raise ValueError("Please select a Plugin!")
        self.select_plugins = chat_param["select_param"].split(",")

        chat_param["chat_mode"] = ChatScene.ChatAgent
        super().__init__(chat_param=chat_param)
        self.plugins_prompt_generator = PluginPromptGenerator()
        self.plugins_prompt_generator.command_registry = CFG.command_registry

        # load  select plugin
        agent_module = CFG.SYSTEM_APP.get_component(
            ComponentType.AGENT_HUB, ModuleAgent
        )
        self.plugins_prompt_generator = agent_module.load_select_plugin(
            self.plugins_prompt_generator, self.select_plugins
        )

        self.api_call = ApiCall(plugin_generator=self.plugins_prompt_generator)

    def generate_input_values(self):
        input_values = {
            "user_goal": self.current_user_input,
            "expand_constraints": self.__list_to_prompt_str(
                list(self.plugins_prompt_generator.constraints)
            ),
            "tool_list": self.plugins_prompt_generator.generate_commands_string(),
        }
        return input_values

    def stream_plugin_call(self, text):
        text = text.replace("\n", " ")
        print(f"stream_plugin_call:{text}")
        return self.api_call.run(text)

    def __list_to_prompt_str(self, list: List) -> str:
        return "\n".join(f"{i + 1 + 1}. {item}" for i, item in enumerate(list))
