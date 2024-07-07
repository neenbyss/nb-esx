ESX = exports['es_extended']:getSharedObject()

RegisterNuiCallback('notify', function(data)
    ESX.ShowNotification(data.message, 900, "primary")
end)

RegisterNuiCallback('close', function(data)
    if data.action == "coords" then
        SendNUIMessage({
            action = "NUI_COORDS",
            type = "coords",
            data = {
                coordsMessage = false
            }
        })
        SetNuiFocus(false, false)
    end
end)
