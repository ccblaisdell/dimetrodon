.PHONY: build cases ergogen

build: ergogen

ergogen:
	npm run build:ergogen

libs:
	git submodule update --remote --recursive --merge
