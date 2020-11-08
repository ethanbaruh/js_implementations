import tensorflow as tf
import tensorflowjs as tfjs
import tensorflow.keras.layers as layers
import numpy as np

# Load data -> MNIST dataset from tensorflow
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

# Normalize values and change dimensions to match [N, C, W, H]
x_train = np.divide(x_train, 255)
x_train = np.expand_dims(x_train, -1)
x_test = np.divide(x_test, 255)
x_test = np.expand_dims(x_test, -1)

# One hot encoding
y_train = tf.keras.utils.to_categorical(y_train, 10)
y_test = tf.keras.utils.to_categorical(y_test, 10)

cnn = tf.keras.Sequential(
    [
        layers.Conv2D(3, 3, activation = 'relu', input_shape = (28, 28, 1)),
        layers.MaxPool2D(2),
        layers.Conv2D(3, 5),
        layers.Flatten(),
        layers.Dense(128, 'relu'),
        layers.Dense(10, 'softmax')
    ]
)

def train(model, x_train, y_train, x_val, y_val, epochs = 10):
    model.compile(tf.keras.optimizers.Adam(), tf.keras.losses.CategoricalCrossentropy())
    model.fit(x_train, y_train, batch_size = 32, epochs = epochs, validation_data = (x_val, y_val))

    return model

cnn = train(cnn, x_train, y_train, x_test, y_test)
cnn.save("model.h5", save_format = "h5")
