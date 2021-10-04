# ToDos When Adding a Tracker

1. Create directory with .vue file inside ~/components/dashboard/trackers
1. The root element of the component has to be a &lt;b-col&gt; containing a &lt;b-card&gt;
1. The &lt;b-card&gt; element's last child has to be an empty &lt;slot /&gt;
1. The component must have a required prop "tracker" of type "Tracker"
1. Add constant in TRACKER_TYPES in Tracker.vue
1. Import and register component in Tracker.vue
1. Add switch case in currentComp() in Tracker.vue
1. Persist configurations by:
1.1 Initializing this data from tracker propertie\'s 'value' (fallback to default settings)
1.1 Setting a watcher to all configurable data
1.1 Make all these watchers call a central function triggering the 'change' event with all configurable data
