from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        
        # Aqui você colocará a lógica de BI, Pareto, etc.
        data = {
            "status": "online",
            "message": "Backend Python no Vercel funcionando!",
            "pareto_index": 0.82
        }
        
        self.wfile.write(json.dumps(data).encode('utf-8'))