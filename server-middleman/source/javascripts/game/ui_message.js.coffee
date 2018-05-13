window.UIMessage = (message, timeInMS) ->
  @messageText = message
  @duration = timeInMS
  @dateAdded = (new Date).getTime()
  return

UIMessage::messageExpired = ->
  _now = (new Date).getTime()
  return _now > @dateAdded + @duration
