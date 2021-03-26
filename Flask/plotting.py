from matplotlib import pyplot as plt
import cv2

# image = cv2.imread("../../../Downloads/wallpaper.jpg")
# print(type(image), image.shape)
# plt.imshow(image)
# plt.show()

def convert(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
