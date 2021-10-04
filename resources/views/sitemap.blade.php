<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>{{env('APP_URL')}}</loc>
        <lastmod>2021-08-01</lastmod>
    </url>
    <url>
        <loc>{{env('APP_URL')}}/about</loc>
        <lastmod>2021-08-01</lastmod>
    </url>
    <url>
        <loc>{{env('APP_URL')}}/sitemap</loc>
        <lastmod>2021-10-02</lastmod>
    </url>
@foreach($articles as $article)
    <url>
         <loc>{{env('APP_URL')}}/post/{{$article->slug}}</loc>
         <lastmod>@php echo substr($article->updated_at,0,10); @endphp</lastmod>
    </url>
@endforeach
</urlset>
