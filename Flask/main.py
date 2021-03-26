from flask import Flask

app = Flask(__name__)

@app.route("/" ,methods=['POST'])
def home():
    if request.method == "POST":
        print("I am a post")
        if request.form:
            print("I have form data")
            #print(request.form['kommentar'])
        if request.data:
            print("I have data")
        if request.json:
            print("I have json")
            # Do stuff with the data...
            return jsonify({"message": "OK"})
        else:
            print("fail")

        return jsonify({})

@app.route("/sriram")
def Sriram():
    return "Hello, sriram!"
    
if __name__ == "__main__":
    app.run(debug=True)