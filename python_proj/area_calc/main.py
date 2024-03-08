import math

def app():
    option = 0

    while option != 5:
        show_menu()

        user_option = input("Which shape: ")

        if is_safe_to_convert(user_option):
            option = int(user_option)

            if option == 1: #Triangle
                base = input("Base: ")
                height = input("Height: ")

                if is_safe_to_convert(base) and is_safe_to_convert(height):
                    print(f'The area is {get_triangle_area(int(base), int(height))}')
                else:
                    print("Invalid input!")

                print("\n")
            
            elif option == 2: #Rectangle
                length = input("Length: ")
                width = input("Width: ")

                if is_safe_to_convert(length) and is_safe_to_convert(width):
                    print(f'The area is {get_rectangle_area(int(length), int(width))}')
                else:
                    print("Invalid input!")

                print("\n")

            elif option == 3: #Square
                side = input("Side: ")

                if is_safe_to_convert(side):
                    print(f'The area is {get_square_area(int(side))}')
                else:
                    print("Invalid input!")

                print("\n")
            
            elif option == 4: #Circle
                radius = input("Radius: ")

                if is_safe_to_convert(radius):
                    print(f'The area is {get_circle_area(int(radius))}')
                else:
                    print("Invalid input!")
                
                print("\n")

            elif option == 5: #Quit
                return
            
        else:
            print("Invalid option!!!")
            print("\n")

def show_menu():
    print("1) Triangle")
    print("2) Rectangle")
    print("3) Square")
    print("4) Circle")
    print("5) Quit")

def get_triangle_area(base, height):
    return (base * height) / 2

def get_rectangle_area(length, width):
    return length * width

def get_square_area(side):
    return side ** 2

def get_circle_area(radius):
    return  math.pi * (radius ** 2)

def is_safe_to_convert(user_input):
    try:
        int(user_input)
        return True
    except ValueError:
        return False

print("==================")
print(" Area Calculator")
print("==================")

app()

print("Bye bye!")