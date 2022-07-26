FROM python:3.8
ENV PYTHONUNBUFFERED 1
WORKDIR /Proyecto_API
COPY requirements.txt requirements.txt
# RUN pip install --upgrade pip wheel
# RUN pip install backports.zoneinfo
RUN pip3 install -r requirements.txt
COPY . .
