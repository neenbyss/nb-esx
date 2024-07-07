RegisterNetEvent('neenbyss:showCoords', function (type)
    local playerPed = PlayerPedId()
    local coords = GetEntityCoords(playerPed)
    local heading = GetEntityHeading(playerPed)
    print(heading)
    
    local vector3Message = ("vector3(%.2f, %.2f, %.2f)"):format(coords.x, coords.y, coords.z)
    local vector4Message = ("vector4(%.2f, %.2f, %.2f, %.2f)"):format(coords.x, coords.y, coords.z, heading)
    local coordsMessage = ("{ x = %.2f, y = %.2f, z = %.2f, h = %.2f }"):format(coords.x, coords.y, coords.z, heading)
    local coords2Message = ("%.2f, %.2f, %.2f, %.2f"):format(coords.x, coords.y, coords.z, heading)

    if type == "vector3" then
        SendNUIMessage({
            action = "CLIP_COORDS",
            type = type,
            data = vector3Message
        })
    elseif type == "vector4" then
        SendNUIMessage({
            action = "CLIP_COORDS",
            type = type,
            data = vector4Message
        })
    elseif type == "coords" then
        SendNUIMessage({
            action = "NUI_COORDS",
            type = type,
            data = {
                vector3Message = vector3Message,
                vector4Message = vector4Message,
                coordsMessage = coordsMessage,
                coords2Message = coords2Message
            }
        })
        SetNuiFocus(true, true)
    end
end)