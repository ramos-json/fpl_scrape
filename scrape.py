from bs4 import BeautifulSoup
from curl_cffi import requests as cureq
import pandas as pd
import time

url = 'https://fbref.com/en/comps/9/Premier-League-Stats'
response = cureq.get(url, impersonate = "chrome")
print(response.status_code)
soup = BeautifulSoup(response.text,'lxml')
tables = soup.find_all('table', class_='stats_table')[0]##only first table

links = tables.find_all('a')
links =[l.get("href") for l in links]##link example: en/squads/18bb7c10/Arsenal-Stats
links = [l for l in links if '/squads' in l]##use only link to squads, discard others
links = [l for l in links if 'Wolv' in l]

team_urls = [f"https://fbref.com{l}" for l in links]##make sure links are complete by adding the https prefix
print(team_urls)
all_teams =[]
for team_url in team_urls:
    name = team_url.split('/')[-1]##example - Arsenal-Stats
    name = name.replace("-Stats","")
    team_response = cureq.get(team_url,impersonate="chrome")
    soup = BeautifulSoup(team_response.text,'lxml')
    squad = soup.find_all('table',class_ = "stats_table")[0]
    if squad and squad.columns:
        squad.columns = squad.columns.droplevel()
    
    ##squad is a BeautifulSoup tag
    ##convert to dataframe
    team_data = pd.read_html(str(squad))[0]
    team_data["Team"] = name
    team_data.to_csv('fpl.csv', mode='a', header=False)
    





