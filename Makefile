data:
	mkdir -p data

install: data
	poetry env use python3.9
	poetry install

jupyter: data
	poetry run jupyter-lab

jupyter-clean:
	poetry run jupyter nbconvert --to notebook --ClearOutputPreprocessor.enabled=True --inplace *.ipynb

gifs: images/ev_highways_J1772COMBO_415.gif

images/ev_highways_J1772COMBO_415.gif: images/ev_highways_J1772COMBO_415_2*.png
	convert -delay 25 -loop 0 images/ev_highways_J1772COMBO_415_2*.png -annotate +1150+970 '@canadianveggie' -crop 1000x900+270+100\! images/ev_highways_J1772COMBO_415.gif
