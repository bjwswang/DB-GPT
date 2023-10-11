from pandas import DataFrame

from pilot.base_modules.agent.commands.command_mange import command
from pilot.configs.config import Config

from pilot.configs.model_config import LOGDIR
from pilot.utils import build_logger

CFG = Config()
logger = build_logger("show_table_gen", LOGDIR + "show_table_gen.log")


@command(
    "response_table",
    "Table display, suitable for display with many display columns or non-numeric columns",
    '"df":"<data frame>"',
)
def response_table(df: DataFrame) -> str:
    logger.info(f"response_table")
    html_table = df.to_html(index=False, escape=False, sparsify=False)
    table_str = "".join(html_table.split())
    html = f"""<div class="w-full overflow-auto">{table_str}</div>"""
    view_text = html.replace("\n", " ")
    return view_text