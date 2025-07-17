```python
import random
import pytest

exp_years = 3
exp_positions = ["backend developer", "sysadmin"]
lu_moods = ["bash, python, php and node", "making friends", "build new things"]

def lu():
    return (
        f"💼 {exp_years}+ years of experience at {', '.join(exp_positions)}\n"
        f"🐧 random mood: {random.choice(lu_moods)}\n"
        "\n# master tip: if u see me debuging at 3am, send coffe not questions"
    )

def lu_test():
    lu = lu()
    assert f"{exp_years}+ years" in lu
    assert any(position in lu for position in exp_positions)
    assert any(mood in lu for mood in lu_moods)

def coffee_test():
    assert "coffee" in lu
```
