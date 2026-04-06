all:
	git config core.hooksPath .githooks
	git add .
	git commit -as
	git push
