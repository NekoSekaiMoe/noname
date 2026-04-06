all: push

push:
	git config core.hooksPath .githooks
	git add .
	git commit -as
	git push

serve:
	python3 -m http.server
