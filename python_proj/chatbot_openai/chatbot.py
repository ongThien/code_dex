import os
import dotenv
from openai import OpenAI
from datetime import datetime

class Chatbot:
    def __init__(self, model):
        self.model = model
        self.bot = OpenAI(api_key = dotenv.dotenv_values(".env")['API_KEY'])
        #print("Successfully created bot!")

    # get response from openAI
    def get_response(self, prompt):

        response = self.bot.chat.completions.create(
            model = self.model,
            messages = [
                {"role": "user", "content": prompt}
            ] 
        )

        message = response.choices[0].message.content

        self.make_log(prompt, message)

        return message

    # utility function to keep chat history
    def make_log(self, prompt, answer):

        def write_to_file(f, prompt, answer):
            f.write("Time: " + str(datetime.now()) + "\n")
            f.write("Prompt: " + prompt + "\n")
            f.write("Answer: " + answer + "\n")

        if os.path.isfile('chat_log.txt'):
            with open('chat_log.txt', 'a') as f:
                write_to_file(f, prompt, answer)                
        else:
            with open('chat_log.txt', 'w') as f:
                f.write("------------- CHAT LOG -------------\n\n")
                write_to_file(f, prompt, answer)
