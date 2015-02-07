#!/usr/bin/env python
import os
import json
from flask import Flask, jsonify, request, Response

app = Flask(__name__)

@app.route('/')
def index():

	# wage calculator
	wage = 15
	try: 
		wage = request.args.get('wage', 15)
	except error:
		wage = 15
	
	wage = float(wage)
	yearly = float(wage*40*52)*0.50
	
	# get the json
	json_data=open('king_county_median_rent.json').read()
	data = json.loads(json_data)
	return_json = {"type" : "FeatureCollection", "crs" : {"type" : "name", "properties" : { "name" : "urn:ogc:def:crs:OGC:1.3:CRS84" } }}
	features = []
	for block in data['features']:
		rent = block['properties']['hh_type1_vmt_rent']
		if(rent !=  None):
			if(yearly > rent):
				features.append(block)
	return_json["features"] = features
	return json.dumps(return_json, separators=(',', ':'))
	
if __name__ == "__main__":
	app.run(debug=True,host='0.0.0.0',port=80)