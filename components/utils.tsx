const DEFAULT_MESSAGE = "lorem ipsum I forgot what comes next";

const generateMessages = (limit = 20) => {
  const messages: string[] = [];

  for (let i = 0; i < limit; i++) {
    messages.push(DEFAULT_MESSAGE);
  }

  return messages;
};

export default generateMessages;
