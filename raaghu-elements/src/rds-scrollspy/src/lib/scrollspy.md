---
slug: "/scrollspy"
date: "2019-05-04"
title: "scrollspy"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Scrollspy

<p class="checkbox-def">Scrollspy is a navigation mechanism that automatically highlights the nav links based on the scroll position</p>



<section class="py-4">
    <h6>Basic</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="Preview-tab" data-bs-toggle="tab" data-bs-target="#Preview" type="button" role="tab" aria-controls="Preview" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="Angular-tab" data-bs-toggle="tab" data-bs-target="#Angular" type="button" role="tab" aria-controls="Angular" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="Preview" role="tabpanel" aria-labelledby="Preview-tab">
          <div class="contents bg-white p-5">
                                          <div class="row">
                                             <div class="col-md-10 col-10 offset-1">
                                                <div class="scrollspy">
                                                   <nav id="navbar-example2" class="navbar navbar-light px-3">
                                                      <ul class="nav nav-pills">
                                                       <li class="">
                                                         <a class="nav-link btn btn-sm" href="#scrollspyHeading1">First</a>
                                                       </li>
                                                       <li class="">
                                                         <a class="nav-link btn btn-sm" href="#scrollspyHeading2">Second</a>
                                                       </li>
                                                       <li class="">
                                                         <a class="nav-link btn btn-sm" href="#scrollspyHeading3">Third</a>
                                                       </li>
                                                       <li class="">
                                                         <a class="nav-link btn btn-sm" href="#scrollspyHeading4">Fourth</a>
                                                       </li>
                                                     </ul>
                                                   </nav>
                                                   <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example bg-light p-5 mt-4" tabindex="0">
                                                     <h6 id="scrollspyHeading1">First heading</h6>
                                                     <p>
                                                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                     </p>
                                                     <h6 id="scrollspyHeading2">Second heading</h6>
                                                     <p>
                                                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                     </p>
                                                     <h6 id="scrollspyHeading3">Third heading</h6>
                                                     <p>
                                                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                     </p>
                                                     <h6 id="scrollspyHeading4">Fourth heading</h6>
                                                     <p>
                                                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                     </p>
                                                     <h6 id="scrollspyHeading5">Fifth heading</h6>
                                                     <p>
                                                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                     </p>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                    </div>
        </div>
        <div class="tab-pane fade show" id="Angular" role="tabpanel" aria-labelledby="Angular-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<div id="scrollspy">
  <a
    type="button"
    href="#scrollspyHeading1"
    target="_self"
    class="btn btn-primary m-1"
  >
    First Header
  </a>
  <a
    type="button"
    href="#scrollspyHeading2"
    target="_self"
    class="btn btn-primary m-1"
  >
    Second Header
  </a>
  <a
    type="button"
    href="#scrollspyHeading3"
    target="_self"
    class="btn btn-primary m-1"
  >
    Third Header
  </a>
</div>
<rds-scrollspy scrollId="scrollspy">
  <scrollspy-item scrollItemId="scrollspyHeading1" header="First header">
    <p>
      This is some placeholder content for the scrollspy page. Note that as you
      scroll down the page, the appropriate navigation link is highlighted. It's
      repeated throughout the component example. We keep adding some more
      example copy here to emphasize the scrolling and highlighting
    </p>
    <div class="d-flex justify-content-end">
      <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
    </div>
  </scrollspy-item>
  <scrollspy-item scrollItemId="scrollspyHeading2" header="Second header">
    <p>
      This is some placeholder content for the scrollspy page. Note that as you
      scroll down the page, the appropriate navigation link is highlighted. It's
      repeated throughout the component example. We keep adding some more
      example copy here to emphasize the scrolling and highlighting
    </p>
    <div class="d-flex justify-content-end">
      <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
    </div>
  </scrollspy-item>
  <scrollspy-item scrollItemId="scrollspyHeading3" header="Third header">
    <p>
      This is some placeholder content for the scrollspy page. Note that as you
      scroll down the page, the appropriate navigation link is highlighted. It's
      repeated throughout the component example. We keep adding some more
      example copy here to emphasize the scrolling and highlighting
    </p>
    <div class="d-flex justify-content-end">
      <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
    </div>
  </scrollspy-item>
</rds-scrollspy>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
                        <h6>
                           Skeleton / Specifications
                        </h6>
                        <div class="py-3">
                              <!-- Tab panes -->
                              <div class="card border p-5">
                                 <div class="row">
                                    <div class="col-md-12">
                                       <img src="https://portal.raaghu.io/images/components/_scrollspy/img-1.png" class="img-fluid"> 
                                    </div> 
                                 </div>
                              </div>
                        </div>
                     </section>

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>