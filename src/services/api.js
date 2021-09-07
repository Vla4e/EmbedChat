const userBase = [
  {
    userId: "1",
    userMessages: [{
        msgText: "Anarhist sum znaese??",
        timesent: new Date().toISOString(),
        isMine: false,
      },
        {
        msgText: "Srcka coek voedno.",
        timesent: new Date().toISOString(),
        isMine: false,
      },
        {
        msgText: "Inter best team serie A :pp",
        timesent: new Date().toISOString(),
        isMine: false,
      }],
  },
  {
    userId: "2",
    userMessages: [{
        msgText: "Che si pushta od sransvo??",
        timesent: new Date().toISOString(),
        isMine: false,
      },
        {
        msgText: "Soerabotata?",
        timesent: new Date().toISOString(),
        isMine: false,
      },
        {
        msgText: "Imali problem??",
        timesent: new Date().toISOString(),
        isMine: false,
      }],
  },
  {
    userId: "3",
    userMessages: [{
        msgText: "Kafz bro?",
        timesent: new Date().toISOString(),
        isMine: false,
      },
        {
        msgText: "Boooo",
        timesent: new Date().toISOString(),
        isMine: false,
      },
        {
        msgText: "Hehence",
        timesent: new Date().toISOString(),
        isMine: false,
      }],
  },
]

const getUserBase = () => {
  return Promise.resolve(userBase)
}

const sendNewMsg = (msg, userId) => {
  const apiMsg = {
    ...msg,
    timesent: new Date().toISOString()
  }
  userBase.find(user => user.userId === userId).userMessages.push(apiMsg)
  return Promise.resolve(apiMsg)
}

export default {
  getUserBase,
  sendNewMsg
}