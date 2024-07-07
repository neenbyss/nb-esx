fx_version 'cerulean'
game 'gta5'

name "nb-esx"
description "fivem script of utilities that esx does not have but qbcore does, but with more stuff."
author "neenbyss"
version "1.0.0"

shared_scripts {
	'shared/*.lua'
}

client_scripts {
	'client/*.lua'
}

server_scripts {
	'server/*.lua'
}

ui_page 'web/nui.html'

files {
	'web/nui.html',
	'web/nui.js',
	'web/nui.css',
}