install:
	poetry env use python3.9
	poetry install

jupyter:
	poetry run jupyter-lab
