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
        msgText: "Treba lorem ipsum ovde.",
        timesent: new Date().toISOString(),
        isMine: false,
      },
        {
        msgText: "Ama ionaka ne razbiram latinski pa shojma vrska...",
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

const sendNewMsg = (msg: any, userId: any) => {
  const apiMsg = {
    ...msg,
    timesent: new Date().toISOString()
  }
  const user = userBase.find(user => user.userId === userId)
  if (user) {
    user.userMessages.push(apiMsg)
    return Promise.resolve(apiMsg)
  }
  return Promise.reject({ statusCode: 404 })
}

export default {
  getUserBase,
  sendNewMsg
}