from flask import Flask

my_app = Flask(__name__)

@my_app.route("/<texto>")
def my_handler(texto):
    return f"Seu nome é {texto}"

if __name__ == "__main__":
    my_app.run(host="0.0.0.0", port=8765)