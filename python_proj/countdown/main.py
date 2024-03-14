import datetime, bday_messages

today = datetime.date.today()
print(today)

next_bday = datetime.date(2024, 10, 8)

days_away = next_bday - today

if today is next_bday:
    print(bday_messages.random_message)
else:
    print(f"My next birthday is {days_away} days away!")


were_born = datetime.date(1994, 10, 8)

print(f"I've lived {today - were_born} days.")