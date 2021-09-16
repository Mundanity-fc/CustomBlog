<div class="d-flex justify-content-end mb-4">
    <a class="btn btn-primary text-uppercase {{ ($paginator->currentPage() == 1) ? ' disabled' : '' }}" href="{{ $paginator->url($paginator->currentPage()-1) }}">← 上一页</a>
    <a class="btn btn-primary text-uppercase {{ ($paginator->currentPage() == $paginator->lastPage()) ? ' disabled' : '' }}" href="{{ $paginator->url($paginator->currentPage()+1) }}">下一页 →</a>
</div>
