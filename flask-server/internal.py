from torchvision import datasets, models, transforms
import dill as pickle
import os
import cv2
import numpy as np
from matplotlib import pyplot as plt
import torch
from models import DenseNet121
import joblib
import torch.nn as nn
from utililties import *
from torch.utils.data import Dataset, DataLoader, Subset

nrows = 256
ncolumns = 256
num_classes = 2
image_transforms = transforms.Compose([
        transforms.Lambda(lambda x: x/255),
        transforms.ToPILImage(), 
        transforms.Resize((230, 230)),
        transforms.CenterCrop(size=224),
        transforms.ToTensor(),
        transforms.Normalize([0.45271412, 0.45271412, 0.45271412],
                            [0.33165374, 0.33165374, 0.33165374])
    ])

def preprocess_img(image_path):
    img = None
    if image_path.split(".")[1] == "jpg":
        img = plt.imread(image_path)

    else: 
        img = cv2.imread(image_path)
    out = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    return out

# COVID_PATH = f"data/training/COVID/"
# NO_COVID_PATH = f"data/training/NonCOVID/"
# # image_path = f"{COVID_PATH}2020.01.24.919183-p27-132.png"
# image_path = f"{NO_COVID_PATH}30_0.jpg"

def standardize_img(preprocessed_img):
    # print(data)
    X = []
    if preprocessed_img.ndim>=3:
        X.append(np.moveaxis(cv2.resize(preprocessed_img[:,:,:3], (nrows,ncolumns),interpolation=cv2.INTER_CUBIC), -1, 0))
    else:
        smimg= cv2.cvtColor(preprocessed_img,cv2.COLOR_GRAY2RGB)
        X.append(np.moveaxis(cv2.resize(smimg, (nrows,ncolumns),interpolation=cv2.INTER_CUBIC), -1, 0))

    return np.array(X)

def infer_single(image_path):

    preprocessed = preprocess_img(image_path)
    x = standardize_img(preprocessed)
    model_main = DenseNet121(num_classes,pretrained=True)
    checkpoint0 = torch.load("Model_densenet121_state.pth")
    model_main.load_state_dict(checkpoint0)

    clf = joblib.load('classifier_model.sav')
    model_main.eval()
    model_main.fc = nn.Identity()
        
    dataset = MyDataset_test(x,image_transforms) # x is output of standardize

    for param in model_main.parameters():
                param.requires_grad_(False)

    dataloader = DataLoader(
    dataset,
    batch_size=16,
    pin_memory=True,worker_init_fn=np.random.seed(7), drop_last=False)

    y_pred2=[]
    for inputs in dataloader:
        outputs = model_main(inputs)
        preds = clf.predict(outputs)
        
        for ii in range(len(preds)):
            if preds[ii] > 0.5:
                print(preds)
                y_pred2.append('COVID')
                print('covid')
            else:
                y_pred2.append('NonCOVID')
                print('noncovid')

    print(y_pred2)

    model_main = DenseNet121(num_classes,pretrained=True)
    checkpoint0 = torch.load("Model_densenet121_state.pth")
    model_main.load_state_dict(checkpoint0)

    clf = joblib.load('classifier_model.sav')
    model_main.eval()
    model_main.fc = nn.Identity()
        
    dataset = MyDataset_test(x,image_transforms) # x is output of standardize

    for param in model_main.parameters():
                param.requires_grad_(False)

    dataloader = DataLoader(
    dataset,
    batch_size=16,
    pin_memory=True,worker_init_fn=np.random.seed(7), drop_last=False)

    y_pred2=[]
    for inputs in dataloader:
        outputs = model_main(inputs)
        preds = clf.predict(outputs)
        
        for ii in range(len(preds)):
            if preds[ii] > 0.5:
                print(preds)
                y_pred2.append('COVID')
                print('covid')
            else:
                y_pred2.append('NonCOVID')
                print('noncovid')

    print(y_pred2)




