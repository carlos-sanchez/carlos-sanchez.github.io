#!/usr/bin/env python3
"""Dev server for local preview. Sends no-store headers so browsers never
serve stale copies of the site while editing. Not used in production
(GitHub Pages handles caching there)."""
import http.server


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    http.server.test(HandlerClass=NoCacheHandler, port=8899)
