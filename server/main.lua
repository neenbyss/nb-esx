ESX = exports['es_extended']:getSharedObject()

ESX.RegisterCommand(neenbyss.commands.id.name, neenbyss.commands.id.perms, function(xPlayer, args, showError)
    local playerId = xPlayer.source
      TriggerClientEvent('esx:showHelpNotification', playerId, "ID "..playerId )
end, false, { help = neenbyss.commands.id.help })

ESX.RegisterCommand(neenbyss.commands.vector3.name, neenbyss.commands.vector3.perms, function(xPlayer, args, showError)
  local playerId = xPlayer.source
  TriggerClientEvent('neenbyss:showCoords', playerId, "vector3")
end, false, { help = neenbyss.commands.vector3.help })

ESX.RegisterCommand(neenbyss.commands.vector4.name, neenbyss.commands.vector4.perms, function(xPlayer, args, showError)
  local playerId = xPlayer.source
  TriggerClientEvent('neenbyss:showCoords', playerId, "vector4")
end, false, { help = neenbyss.commands.vector4.help })

ESX.RegisterCommand(neenbyss.commands.coords.name, neenbyss.commands.coords.perms, function(xPlayer, args, showError)
  local playerId = xPlayer.source
  TriggerClientEvent('neenbyss:showCoords', playerId, "coords")
end, false, { help = neenbyss.commands.coords.help })