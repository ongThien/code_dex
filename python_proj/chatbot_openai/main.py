from time import sleep
from tqdm import tqdm
from chatbot import Chatbot

# utility function that simulate a download
def welcome():
    for i in tqdm(range(100), ncols=80, bar_format='{l_bar}{bar}|'):
        sleep(0.02)  
    print("Processing...............")
    sleep(1.5) 
    print ("Chatbot: Hi! I'm a chatbot powered by OpenAI! You can ask me anything and I'll try to give you the answer")


def chat():
    welcome()
    chatbot = Chatbot('gpt-3.5-turbo')
    chatting = True
    while chatting:
        print('(If you want to end the chat, simply type "N" or "n")')
        usr_prompt = input("You: ")
        if usr_prompt.strip().lower() == 'n':
            chatting = False
        else:
            print("Chatbot: " + chatbot.get_response(usr_prompt))


chat()
print("Chatbot: Goodbye!")
