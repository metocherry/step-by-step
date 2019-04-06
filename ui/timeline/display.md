# CSS Display

## Normal Flow

`static`은 정적이라는 의미보다, 컴퓨터가 자동으로 Normal Flow 방식으로 html을 랜더링한다.
Normal Flow는 박스 단위로 요소의 크기를 계산하고, 두가지의 배치 방식으로 요소의 위츨 정해 그린다.

## Block formatting contexts

## Inline formatting contexts

## Relative positioning

## Box Model

### Box Model 구성요소

- margin
- border
- padding
- contents

이 요소를 이용하여, Geometry 공간을 계산하고, 배치를 한다.
width와 height에 주는 요소는 `box-sizing` 속성의 영향을 받는다.
box-sizing은 `content-box`, `padding-box`, `border-box` 3가지 값이 존재한다.

content-box는 css 표준에 의해 정의된 기본 값으로, 이 속성을 가진 box는 contents영역을 크기로 가진다.
padding-box는 padding 영역까지(padding + contents) 크기로 포함한다.
border-box는 borader 영역까지(border + padding + contents) 크기로 포함한다.

## Display Group

- outside
- listitem
- box
- inside
- internal
- legacy

### Outside

Normal Flow(block, inline)

- block
- inline
- run-in

### Listitem

list-item

### Box

- br, wbr, meter, progress, canvas, embed, object, audio, iframe, img, video, frame, frameset, input, textarea, select,
legend, button, filedset
- contetns | none
- contents : 그리는 것을 OS에 맡긴다. OS마다 다르게 그린다.

### Inside

- contents Layout
- 안의 레이아웃 속성을 지정한다.
- flow | flow-root | table | flex | grid | subgrid | ruby
- flow-root : 새로운 BFC를 생성한다.

### Legacy

- 두 개의 속성을 기술할 수 없어 탄생했다.
- inline contents layout
- inline-block | inline-table | inline-flex | inline-grid

### Internal

- table & ruby
- table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption
- ruby-base | ruby-text | ruby-base-container | ruby-text-content

### Flexbox

- css flexible box layout module
- css flexbox module 1
- GPU가 가속하기 때문에 빠르다.
- 부모가 flex이면, 직계자식은 flex-item
- 한줄만(flex-line) x축으로(main-axis) 그린다.
- main axis와 반대는 축을 cross axis라고 부른다.

#### Flexbox Attribute

- diplay: flex | inlin-flex
- flex-direction: row(default) | row-reverse | column | column-reverse
- flex-wrap: nowrap(default) | wrap | wrap-reverse
- justiy-content
  - main axis를 정의한다.
  - flex-start | flex-end | center | space-between | space-around
- align-items
  - corxx axis를 정의한다.
  - flex-start | felx-end | center | baseline | stretch
- align-content
  - `flex-wrap: wrap`만 적용되는 속성이다.
  - flex items이 줄바꿈이 발생했을 때, 어떻게 정렬할지 정의한다.
  - justify 속성과 일치한다.

#### Flexitem Attribute

- order
  - 정렬 순서를 정의한다.
  - order 변경시 reflow가 일어나지 않고, repaint만 일어난다.(GPU Render)
- align-self
  - flex items은 부모 속성을 따르지만, 특정 item에 다르게 적용하고 싶을경우 사용한다.
-flex
  - flex-grow
    - 확대되었을 때 어디가지 커질 것인지 정의한다.
    - 0(default): 100%를 적용한다.
    - 1~ : 가중치를 준다.(소수점을 지정 가능)
  - flex-shrink
    - 축소되었을 때 어디까지 작아질 것인지 정의한다.
  - flex-basis
    - 기본 값을 정의한다.
    - auto = content(flex box 안에 있는 컨텐츠의 크기 - default)
    - 크기를 지정하면, 지정한 값이 기본값이 된다.
  - `max-{width,height}` 또는 `min-{width,height}` 속성이 있으면, `shrink`와 `grow`를 무시한다.
  - initial = none | auto | 1~

## References

- [W3C Visual formatting model](https://www.w3.org/TR/CSS2/visuren.htm)
