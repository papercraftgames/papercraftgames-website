# GA Metrics

Track GA visits and many common events.

## Status

- Implemented Google Analytics tag for `G-425W92QKYY`.
- Added event tracking for navigation clicks, CTA clicks, footer/outbound clicks, scroll depth, section views, and game panel views.
- Validated with `npm run check` and `npm run build`.

GA Code:

```
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-425W92QKYY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-425W92QKYY');
</script>
```
