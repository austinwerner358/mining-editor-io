# window.UIMessageManager = ->
#   @messageList = []
#   @cachedMessages = []
#   @busy = false
#   return
#
# UIMessageManager::removeExpiredMessages = (overrideBusy) ->
#   if overrideBusy
#     _messageList
#     for message in @messageList
#       unless message.messageExpired()
#         _messageList.push(message.messageText)
#     @messageList = _messageList
#   else
#     if @busy
#       setTimeout(@removeExpiredMessages(false), 1e3)
#     else
#       @removeExpiredMessages(true)
#
# UIMessageManager::resetList = ->
#   return true
#
# UIMessageManager::getMessages = ->
#   if @busy
#     return @cachedMessages
#   @busy = true
#   _messageList = []
#   for message in @messageList
#     unless message.messageExpired()
#       _messageList.push(message.messageText)
#   @cachedMessages = _messageList
#   @removeExpiredMessages(true)
#   return _messageList
