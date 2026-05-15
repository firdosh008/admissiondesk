import urllib.request, os
urls = [
  ("https://www.uudoon.in/placements/assets/images/top-company-logos/5.jpg", "google.jpg"),
  ("https://www.uudoon.in/placements/assets/images/top-company-logos/17.jpg", "adobe.jpg"),
  ("https://www.uudoon.in/placements/assets/images/top-company-logos/1.jpg", "atlassian.jpg"),
  ("https://www.uudoon.in/placements/assets/images/top-company-logos/4.jpg", "amazon.jpg"),
  ("https://www.uudoon.in/placements/assets/images/top-company-logos/7.jpg", "autodesk.jpg"),
  ("https://www.uudoon.in/placements/assets/images/top-company-logos/6.jpg", "deloitte.jpg"),
  ("https://www.uudoon.in/placements/assets/images/top-company-logos/10.jpg", "ericsson.jpg"),
  ("https://www.uudoon.in/placements/assets/images/new-logos/08.jpg", "nvidia.jpg"),
  ("https://www.uudoon.in/placements/assets/images/new-logos/29.jpg", "accenture.jpg"),
  ("https://www.uudoon.in/placements/assets/images/top-company-logos/3.jpg", "zscaler.jpg"),
  ("https://www.uudoon.in/placements/assets/images/top-company-logos/8.jpg", "ibm.jpg"),
  ("https://www.uudoon.in/placements/assets/images/top-company-logos/15.jpg", "schneider.jpg"),
  ("https://www.uudoon.in/placements/assets/images/new-logos/04.jpg", "citi.jpg"),
  ("https://www.uudoon.in/placements/assets/images/new-logos/11.jpg", "pepsico.jpg"),
]
dst = "/Users/devashishthapliyal/Documents/work/ched/edutech-landing/public/uu-new/companies"
def req(u): return urllib.request.Request(u, headers={"User-Agent":"Mozilla/5.0"})
for u, n in urls:
    try:
        with urllib.request.urlopen(req(u), timeout=20) as r:
            data = r.read()
        with open(os.path.join(dst, n), "wb") as f:
            f.write(data)
        print(f"ok {n} {len(data)}")
    except Exception as e:
        print(f"FAIL {n} {e}")
