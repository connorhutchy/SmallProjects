import os

def main():

    try:
        recepient = input("recepient: ")
        message = input("message: ")
        times = int(input("how many times: "))
        print("Enjoy :) ")
        for i in range(times):
            os.system("""osascript -e 'tell application "Messages" to send "{}" to buddy "{}"' """.format(message,recepient))
    except:
        print("error")

main()