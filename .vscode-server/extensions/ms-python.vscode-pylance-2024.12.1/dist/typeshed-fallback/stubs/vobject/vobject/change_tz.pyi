from collections.abc import Sequence

def change_tz(cal, new_timezone, default, utc_only: bool = False, utc_tz=...) -> None: ...
def show_timezones() -> None: ...
def convert_events(utc_only: bool, args: Sequence[str]) -> None: ...
def main() -> None: ...

version: str

def get_options(): ...
