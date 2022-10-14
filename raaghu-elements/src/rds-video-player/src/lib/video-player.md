---
slug: "/video-player"
date: "2019-05-04"
title: "Elements > Video-player"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Video Player

<p class="checkbox-def">Video player lets user control and play multimedia files on the webpage.</p>

<section class="py-4">
    <h6>Default</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic3-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic3" type="button" role="tab" aria-controls="PreviewBasic3" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic3-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic3" type="button" role="tab" aria-controls="AngularBasic3" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic3" role="tabpanel" aria-labelledby="PreviewBasic3-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/video-player.png" class="img-fuild w-25">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic3" role="tabpanel" aria-labelledby="AngularBasic3-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-website-metric [item]="item"></rds-website-metric>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>