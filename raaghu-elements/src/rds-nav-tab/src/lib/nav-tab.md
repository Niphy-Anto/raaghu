---
slug: "/nav-tab"
date: "2019-05-04"
title: "nav-tab"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Tabs

<p class="checkbox-def">Tabs are a way of navigating between multiple panels, reducing clutter and fitting more into a smaller space.</p>

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
          <div class="contents bg-white p-5">
                                          <div class="row">
                                             <div class="col-10 offset-1">
                                                <div class="cust-tabs">
                                                   <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                     <li class="nav-item" role="presentation">
                                                       <button class="nav-link active" id="Prev-tab" data-bs-toggle="tab" data-bs-target="#Prev" type="button" role="tab" aria-controls="Prev" aria-selected="true">TAB A </button>
                                                     </li>
                                                     <li class="nav-item" role="presentation">
                                                       <button class="nav-link" id="Prev-tab1" data-bs-toggle="tab" data-bs-target="#Prev1" type="button" role="tab" aria-controls="Prev1" aria-selected="false">TAB B </button>
                                                     </li>
                                                   </ul>
                                                </div>
                                                <div class="tab-content card border" id="myTabContent">
                                                   <div class="tab-pane fade active show" id="Prev" role="tabpanel" aria-labelledby="Prev-tab">
                                                      <div class="contents bg-white p-5">
                                                            <div class="row">
                                                               <div class="col-12 text-start">
                                                                  <h6>
                                                                     TAB A
                                                                  </h6>
                                                                  <p>
                                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                                  </p>
                                                               </div>
                                                            </div> 
                                                      </div>
                                                   </div>
                                                   <div class="tab-pane fade" id="Prev1" role="tabpanel" aria-labelledby="Prev-tab1">
                                                      <div class="contents bg-white p-5">
                                                            <div class="row">
                                                               <div class="col-12 text-start">
                                                                  <h6>
                                                                     TAB B
                                                                  </h6>
                                                                  <p>
                                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                                  </p>
                                                               </div>
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
<div class="row  m-0 p-4">

```html
<div class="col-md-12">
  <rds-nav-tab
    [navtabsItems]="navtabsItems"
    horizontalAlignment="start"
    [verticalAlignment]="false"
    [pills]="true"
    [tabs]="false"
    [fill]="false"
    [justified]="false"
    [flex]="false"
  ></rds-nav-tab>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <p>
        This is some placeholder content the Profile tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility and
        styling. You can use it with tabs, pills, and any other
      </p>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      This is some placeholder content the Home tab's associated content.
      Clicking another tab will toggle the visibility of this one for the next.
      <br />
      The tab JavaScript swaps classes to control the content visibility and
      styling. You can use it with tabs, pills, and any other .nav-powered
      navigation.
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      Tab3
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      test
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Pills</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewPills-tab" data-bs-toggle="tab" data-bs-target="#PreviewPills" type="button" role="tab" aria-controls="PreviewPills" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularPills-tab" data-bs-toggle="tab" data-bs-target="#AngularPills" type="button" role="tab" aria-controls="AngularPills" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewPills" role="tabpanel" aria-labelledby="PreviewPills-tab">
          <div class="contents bg-white p-5">
                                          <div class="row">
                                             <div class="col-10 offset-1">
                                                <div class="cust-tabs rds-tab-2">
                                                   <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                     <li class="nav-item" role="presentation">
                                                       <button class="nav-link active" id="Prev-tab3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="true">TAB A </button>
                                                     </li>
                                                     <li class="nav-item" role="presentation">
                                                       <button class="nav-link" id="Prev-tab4" data-bs-toggle="tab" data-bs-target="#tab4" type="button" role="tab" aria-controls="tab4" aria-selected="false">TAB B </button>
                                                     </li>
                                                   </ul>
                                                </div>
                                                <div class="tab-content card border" id="myTabContent">
                                                   <div class="tab-pane fade active show" id="tab3" role="tabpanel" aria-labelledby="Prev-tab3">
                                                      <div class="contents bg-white p-5">
                                                            <div class="row">
                                                               <div class="col-12 text-start">
                                                                  <h6>
                                                                     TAB A
                                                                  </h6>
                                                                  <p>
                                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                                  </p>
                                                               </div>
                                                            </div> 
                                                      </div>
                                                   </div>
                                                   <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="Prev-tab4">
                                                      <div class="contents bg-white p-5">
                                                            <div class="row">
                                                               <div class="col-12 text-start">
                                                                  <h6>
                                                                     TAB B
                                                                  </h6>
                                                                  <p>
                                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                                  </p>
                                                               </div>
                                                            </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                    </div>
        </div>
        <div class="tab-pane fade show" id="AngularPills" role="tabpanel" aria-labelledby="AngularPills-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<div class="col-md-12">
  <rds-nav-tab
    [navtabsItems]="navtabsItems"
    horizontalAlignment="start"
    [verticalAlignment]="false"
    [pills]="true"
    [tabs]="false"
    [fill]="false"
    [justified]="false"
    [flex]="false"
  ></rds-nav-tab>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <p>
        This is some placeholder content the Profile tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility and
        styling. You can use it with tabs, pills, and any other
      </p>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      This is some placeholder content the Home tab's associated content.
      Clicking another tab will toggle the visibility of this one for the next.
      <br />
      The tab JavaScript swaps classes to control the content visibility and
      styling. You can use it with tabs, pills, and any other .nav-powered
      navigation.
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      Tab3
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      test
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Tabs</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewTabs-tab" data-bs-toggle="tab" data-bs-target="#PreviewTabs" type="button" role="tab" aria-controls="PreviewTabs" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularTabs-tab" data-bs-toggle="tab" data-bs-target="#AngularTabs" type="button" role="tab" aria-controls="AngularTabs" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewTabs" role="tabpanel" aria-labelledby="PreviewTabs-tab">
          <div class="contents bg-white p-5">
                                          <div class="row">
                                             <div class="col-md-5 mb-4">
                                                  <img src="https://portal.raaghu.io/images/components/_tabs/1.png" class="img-fluid">
                                             </div>
                                             <div class="col-md-1 mb-4"> 
                                             </div>
                                             <div class="col-md-5 mb-4">
                                                     <img src="https://portal.raaghu.io/images/components/_tabs/2.png" class="img-fluid">
                                                </div>
                                          </div>
                                             <div class="row">
                                                <div class="col-md-5">
                                                     <img src="https://portal.raaghu.io/images/components/_tabs/3.png" class="img-fluid">
                                                </div>
                                                <div class="col-md-1 mb-4"> 
                                                </div>
                                                <div class="col-md-5">
                                                     <img src="https://portal.raaghu.io/images/components/_tabs/4.png" class="img-fluid">
                                                </div>
                                             </div>
                                    </div>
        </div>
        <div class="tab-pane fade show" id="AngularTabs" role="tabpanel" aria-labelledby="AngularTabs-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<div class="col-md-12">
  <rds-nav-tab
    [navtabsItems]="navtabsItems"
    horizontalAlignment="start"
    [verticalAlignment]="false"
    [pills]="false"
    [tabs]="true"
    [fill]="false"
    [justified]="false"
    [flex]="false"
  ></rds-nav-tab>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <p>
        This is some placeholder content the Profile tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility and
        styling. You can use it with tabs, pills, and any other
      </p>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      This is some placeholder content the Home tab's associated content.
      Clicking another tab will toggle the visibility of this one for the next.
      <br />
      The tab JavaScript swaps classes to control the content visibility and
      styling. You can use it with tabs, pills, and any other .nav-powered
      navigation.
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      Tab3
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      test
    </div>
  </div>
</div>
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
                                    <div class="col-md-8">
                                       <img src="https://portal.raaghu.io/images/components/_floating-labels/img-1.png" class="img-fluid">
                                    </div> 
                                 </div>
                              </div>
                        </div>
                     </section>

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>