<?php
	header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
?>

{
   "fruits": {
      "title": "Fruits",
      "answers": [
         {
            "word": "banana",
            "percentage": 60
         },
         {
            "word": "apple",
            "percentage": 34
         }
      ],
      "next": "vegetables"
   },
   "vegetables": {
      "title": "Vegetables",
      "answers": [
         {
            "word": "cucumber",
            "percentage": 50
         },
         {
            "word": "leek",
            "percentage": 44
         }
      ],
      "next": "birds"
   },
   "birds": {
      "title": "Birds",
      "answers": [
         {
            "word": "pigeon",
            "percentage": 31
         },
         {
            "word": "robin",
            "percentage": 53
         }
      ],
      "next": ""
   }
}