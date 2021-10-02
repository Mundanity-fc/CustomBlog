<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.baidu.com/schemas/sitemap-mobile/1/">
    <url>
        <loc>https://mundanity.tech/</loc>
        <lastmod>2021-08-01</lastmod>
        <mobile:mobile type="pc,mobile"/>
    </url>
    <url>
        <loc>https://mundanity.tech/about</loc>
        <lastmod>2021-08-01</lastmod>
        <mobile:mobile type="pc,mobile"/>
    </url>
    <url>
        <loc>https://mundanity.tech/sitemap</loc>
        <lastmod>2021-10-02</lastmod>
        <mobile:mobile type="pc,mobile"/>
    </url>
@foreach($articles as $article)
    <url>
        <loc>https://mundanity.tech/post/{{$article->slug}}</loc>
        <lastmod>@php echo substr($article->updated_at,0,10); @endphp</lastmod>
        <mobile:mobile type="pc,mobile"/>
    </url>
@endforeach
</urlset>
