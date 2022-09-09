---
slug: "/Accordion"
date: "2019-05-04"
title: "Accordion"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Accordion

<p class="checkbox-def">It is list of collapsible panels with clickable heading or down arrow, expands </p>

<!-- Basic -->
  <section class="py-4">
    <h6>Basic</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic" role="tabpanel" aria-labelledby="PreviewBasic-tab">
          <div class="contents bg-light p-5">
            <div class="row">
              <div class="col-md-5 col-12 mb-5">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample" style="">
                      <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <b> .accordion-body</b>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-accordian>
  <accordion-item title="Section 1 title">
    <h3>Custom</h3>
  </accordion-item>
</rds-accordian>

<rds-accordian>
  <accordion-item title="Section 2 title">
    <h3>Custom</h3>
  </accordion-item>
</rds-accordian>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


<!-- Flush -->
  <section class="py-4">
    <h6>With Flush</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewOutlined-tab" data-bs-toggle="tab" data-bs-target="#PreviewOutlined" type="button" role="tab" aria-controls="PreviewOutlined" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularOutlined-tab" data-bs-toggle="tab" data-bs-target="#AngularOutlined" type="button" role="tab" aria-controls="AngularOutlined" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewOutlined" role="tabpanel" aria-labelledby="PreviewOutlined-tab">
          <div class="contents bg-light p-5">
            <div class="row">
              <div class="col-md-5 col-12 mb-5">
                <div class="accordion outline" id="accordionExample2">
                                                     <div class="accordion-item">
                                                       <h2 class="accordion-header" id="heading2">
                                                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                           Accordion Item #1
                                                         </button>
                                                       </h2>
                                                       <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample2">
                                                         <div class="accordion-body">
                                                           <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <b>.accordion-body</b>, though the transition does limit overflow.
                                                         </div>
                                                       </div>
                                                     </div>
                                                   </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularOutlined" role="tabpanel" aria-labelledby="AngularOutlined-tab">
          <div class="contents bg-light">
<div class="row bg-dark text-white m-0 p-4">

```html
<rds-accordian [flush]="flush">
  <accordion-item title="Section 1 title">
    this is content updated
  </accordion-item>
</rds-accordian>

<rds-accordian>
  <accordion-item title="Section 2 title">
    <h3>Custom</h3>
  </accordion-item>
</rds-accordian>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


<!-- Skeleton / Specifications -->
<section class="py-4">
                        <h6>
                           Skeleton / Specifications
                        </h6>
                        <div class="py-3">
                              <!-- Tab panes -->
                              <div class="card border p-5">
                                 <div class="row">
                                    <div class="col-md-12">
                                       <img src="https://portal.raaghu.io/images/components/_accordion/img-1.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
