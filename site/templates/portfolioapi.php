<?php

// if(!r::ajax()) go(url('error'));

header('Content-type: application/json; charset=utf-8');

$data = $pages->find('portfolio')->children()->visible();

$json = array();

// get all images in array

foreach($data as $article) {

  $json[] = array(
    'url'   => (string)$article->url(),
    'tinyurl' => (string)$article->tinyurl(),
    'title' => (string)$article->title(),
    'text'  => (string)$article->text(),
    'date'  => (string)$article->date('c'),
    'tags'  => (string)$article->tags(),
    'image' => (string)$article->image()->url(),
    'coverimage' => (string)$article->coverimage()->url(),
    'files' => (array)$article->files()->toArray()
  );

}

echo json_encode($json);

?>
