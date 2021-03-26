from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def index():
    return {"data": "HELLO!!"}

@app.route('/show', methods=["POST"])
def plot_image():
    from matplotlib import pyplot as plt 
    import numpy as np
    import cv2
    from plotting import convert
    image = request.files['image'].read()
    npimage = np.fromstring(image, np.uint8)
    print(npimage)
    print(type(npimage), npimage.shape)
    image = cv2.imdecode(npimage, cv2.IMREAD_COLOR)
    print(type(image), image.shape)
    image = convert(image)
    # plt.imshow(image)
    # plt.show()

    # print(f"request.json: {request.json}")
    # for key in request.form.keys():
        # print(key)
    # print(f"file_type: {type(request.files['image'])}")
    # print(f"type: {type(request)} {type(request.json)}", end="\n\n")
    return {"status": "accepted"}, 202
