import pandas as pd
import excel2json

# excel2json will take any file you put in and create a json file.
excel2json.convert_from_file("file-name")


df = pd.read_excel("error-data.xlsx")
