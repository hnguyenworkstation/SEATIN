[[
  //full product decription
  '{{repeat(5)}}',
    {
    index: '{{index()}}',
    url: 'products/{{integer(100000, 999999)}}',
    title: '{{lorem(5, "words")}}',
    description: '{{lorem(1, "paragraphs")}}',
    images: [
      '{{repeat(5)}}',
      '/img/{{integer(100000, 999999)}}'
    ],
      tags: ['{{repeat(5)}}', [
      '{{lorem(1, "words")}}', '/categories/{{integer(100000, 999999)}}'
      ]],
    date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    option: '{{random("eat in", "pickup")}}',  
      
    
    host_name: '{{firstName()}} {{surname()}}',
    rating: '{{floating(0,5)}}', 
    reviews: '{{integer(5,90)}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}'
  }
],
  
[
  //thumbnail product for search
  '{{repeat(5)}}',
    {
    index: '{{index()}}',
    url: 'products/{{integer(100000, 999999)}}',
    title: '{{lorem(5, "words")}}',
    description: '{{lorem(1, "paragraphs")}}',
    images: '/img/{{integer(100000, 999999)}}',
    tags: ['{{repeat(5)}}', [
      '{{lorem(1, "words")}}', '/categories/{{integer(100000, 999999)}}'
    ]],
    date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    option: '{{random("eat in", "pickup")}}',  
      
    
    host_img: '/usr/img/{{integer(100000, 999999)}}',
    host_url: '/usr/info/{{integer(100000, 999999)}}',
    rating: '{{floating(0,5)}}',
    reviews: ['{{repeat(5)}}',{
      user: '{{firstName()}} {{surname()}}',
      user_url: '/usr/info/{{integer(100000, 999999)}}',
      content: '{{lorem(50, "words")}}'
    }],
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}'
  }
]
]