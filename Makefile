data:
	mkdir -p data

output:
	mkdir -p output

dirs: data output

install: dirs
	poetry env use python3.9
	poetry install

jupyter: dirs
	poetry run jupyter-lab

jupyter-clean:
	poetry run jupyter nbconvert --to notebook --ClearOutputPreprocessor.enabled=True --inplace *.ipynb

gifs: images/ev_highways_J1772COMBO_415.gif images/ev_highways_US_J1772COMBO_415.gif images/ev_highways_US_TESLA_415.gif

images/ev_highways_J1772COMBO_415.gif: output/monthly_ev_highways_J1772COMBO_415_*.png
	convert -delay 25 -loop 0 output/monthly_ev_highways_J1772COMBO_415_*.png -annotate +1150+970 '@canadianveggie' -crop 1000x900+270+100\! images/ev_highways_J1772COMBO_415.gif

images/ev_highways_US_J1772COMBO_415.gif: output/monthly_ev_highways_US_J1772COMBO_415_*.png
	convert -delay 25 -loop 0 output/monthly_ev_highways_US_J1772COMBO_415_*.png -annotate +830+870 '@canadianveggie' -crop 1200x695+170+200\! images/ev_highways_US_J1772COMBO_415.gif

images/ev_highways_US_TESLA_415.gif: output/monthly_ev_highways_US_TESLA_415_*.png
	convert -delay 25 -loop 0 output/monthly_ev_highways_US_TESLA_415_*.png -annotate +830+870 '@canadianveggie' -crop 1200x695+170+200\! images/ev_highways_US_TESLA_415.gif

annotated: $(patsubst output/%,images/%,$(wildcard output/ev_highways_*.png))

images/ev_highways_US_%.png: output/ev_highways_US_%.png
	convert $< -annotate +830+870 '@canadianveggie' -crop 1200x695+170+200\! $@

images/ev_highways_%.png: output/ev_highways_%.png
	convert $< -annotate +1150+970 '@canadianveggie' -crop 1000x900+270+100\! $@
