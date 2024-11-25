from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Serve the main HTML for SSR
@app.route('/')
@app.route('/photography')
def index():
    return render_template('SidebarNavigation.html')

# API endpoints to serve data for client-side routing
@app.route('/api/images/dashboard')
def dashboard_images():
    return jsonify([
        "static/64479709_large1300.jpg",
        "static/space-saturn-asteroid-universe-wallpaper-preview.jpg",
        "static/nightly-earth-outer-space-abstract-600nw-1104358667.webp",
        "static/scene-Iron-Man.webp"
    ])

@app.route('/api/images/photography')
def photography_images():
    return jsonify([
        "static/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg",
        "static/GettyImages-2151914137-e1725963587256.webp",
        "static/960x0.webp",
        "static/102641799-20150331-9995-1180.jpg"
    ])

# Catch-all route
@app.route('/<path:path>')
def catch_all(path):
    return render_template('SidebarNavigation.html')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=80)
