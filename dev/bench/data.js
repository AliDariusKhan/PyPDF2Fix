window.BENCHMARK_DATA = {
  "lastUpdate": 1651396127542,
  "repoUrl": "https://github.com/py-pdf/PyPDF2",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "name": "py-pdf",
            "username": "py-pdf"
          },
          "committer": {
            "name": "py-pdf",
            "username": "py-pdf"
          },
          "id": "1305df628fc63ed70829902edf934ab186b112c7",
          "message": "Add Benchmark for Performance Testing",
          "timestamp": "2022-04-19T10:36:47Z",
          "url": "https://github.com/py-pdf/PyPDF2/pull/781/commits/1305df628fc63ed70829902edf934ab186b112c7"
        },
        "date": 1650371123811,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.9324214668863358,
            "unit": "iter/sec",
            "range": "stddev: 0.004305996984652197",
            "extra": "mean: 1.0724763806 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "py-pdf",
            "username": "py-pdf"
          },
          "committer": {
            "name": "py-pdf",
            "username": "py-pdf"
          },
          "id": "3dac50386da3c6d310d4a9ece804bc140e8e0798",
          "message": "Add Benchmark for Performance Testing",
          "timestamp": "2022-04-19T10:36:47Z",
          "url": "https://github.com/py-pdf/PyPDF2/pull/781/commits/3dac50386da3c6d310d4a9ece804bc140e8e0798"
        },
        "date": 1650372088110,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.9422550305909239,
            "unit": "iter/sec",
            "range": "stddev: 0.006487516920717905",
            "extra": "mean: 1.0612838005999947 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.256656597871526,
            "unit": "iter/sec",
            "range": "stddev: 0.004297642398638799",
            "extra": "mean: 97.49765827272809 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0f1fa3641cf1cda96e1bb1a655493617df5281c",
          "message": "DEV: Add Benchmark for Performance Testing (#781)\n\nWe want to track performance over time only for what actually\r\nis in main.\r\n\r\nCloses #761",
          "timestamp": "2022-04-21T18:19:24+02:00",
          "tree_id": "1eaf5ea1f69a7068b51ebe29334edb8c75efe091",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f0f1fa3641cf1cda96e1bb1a655493617df5281c"
        },
        "date": 1650557998642,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 1.0526627229158771,
            "unit": "iter/sec",
            "range": "stddev: 0.0067697065658216754",
            "extra": "mean: 949.9718934000043 msec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 11.38381983307977,
            "unit": "iter/sec",
            "range": "stddev: 0.004719622305106786",
            "extra": "mean: 87.84397633333423 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "668869f17988284e260c30b39c47eb26e033df54",
          "message": "DOC: Add compression example (#792)",
          "timestamp": "2022-04-22T08:10:05+02:00",
          "tree_id": "50ce3e1e74b68984df1ee6d33fddab8e41c6054a",
          "url": "https://github.com/py-pdf/PyPDF2/commit/668869f17988284e260c30b39c47eb26e033df54"
        },
        "date": 1650607837510,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.9530085273748775,
            "unit": "iter/sec",
            "range": "stddev: 0.012098282851842536",
            "extra": "mean: 1.049308554199996 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.434029435085847,
            "unit": "iter/sec",
            "range": "stddev: 0.0046057474193716705",
            "extra": "mean: 95.84025099999849 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffb208478144c2dc8f7ee9a4038f2c1c85ac99df",
          "message": "ENH: Allow setting form field flags (#802)\n\nCloses #574\r\nCloses #801\r\n\r\nCo-authored-by: Craig Jones <craig@k6nnl.com>",
          "timestamp": "2022-04-23T10:17:57+02:00",
          "tree_id": "730c99cfa0a0db24008b5ec4faf861825b15be0a",
          "url": "https://github.com/py-pdf/PyPDF2/commit/ffb208478144c2dc8f7ee9a4038f2c1c85ac99df"
        },
        "date": 1650701907682,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 1.05365515080177,
            "unit": "iter/sec",
            "range": "stddev: 0.005612559551809395",
            "extra": "mean: 949.0771238000008 msec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 11.561522963694742,
            "unit": "iter/sec",
            "range": "stddev: 0.0038475156847702775",
            "extra": "mean: 86.49379525000118 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40df4d7622c8b838a631113ced680d021070dd80",
          "message": "ENH: Allow setting permission flags when encrypting (#803)\n\nCloses #161\r\nCloses #308",
          "timestamp": "2022-04-23T10:43:54+02:00",
          "tree_id": "908a8418f3c819e228019736692c867df495166a",
          "url": "https://github.com/py-pdf/PyPDF2/commit/40df4d7622c8b838a631113ced680d021070dd80"
        },
        "date": 1650703469764,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.950078836259226,
            "unit": "iter/sec",
            "range": "stddev: 0.005702058684478769",
            "extra": "mean: 1.0525442330000003 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.280940522982494,
            "unit": "iter/sec",
            "range": "stddev: 0.00423528362980359",
            "extra": "mean: 97.26736554545309 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d659389e7561c024b5ffb9edd810e94814fa63e",
          "message": "ROB: Handle recursion error (#804)\n\nThis doesn't solve the issue, but it might make it less severe.\r\n\r\nSee #520\r\nSee #268\r\nSee https://github.com/virantha/pypdfocr/issues/59\r\n\r\nhttps://github.com/sfneal/PyPDF3/commit/3558a69388b12bbf166d81b8a863b1d6c9843c62\r\n\r\nCo-authored-by: danniesim <geemee@gmail.com>",
          "timestamp": "2022-04-23T10:57:54+02:00",
          "tree_id": "bc451d9cfc50cc3ba097311c2ed29028491f0ef3",
          "url": "https://github.com/py-pdf/PyPDF2/commit/3d659389e7561c024b5ffb9edd810e94814fa63e"
        },
        "date": 1650704308997,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.9304874995964462,
            "unit": "iter/sec",
            "range": "stddev: 0.005964200812272813",
            "extra": "mean: 1.0747054640000016 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.056596564428304,
            "unit": "iter/sec",
            "range": "stddev: 0.0035597955706618586",
            "extra": "mean: 99.43721949999969 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9941099b80dee1db6bfc747535b9d822b0fb0617",
          "message": "TST: Newlines in text extraction (#807)",
          "timestamp": "2022-04-23T14:50:17+02:00",
          "tree_id": "5c94513b4178944e0e5a534e1dce9dbc1e9d4f80",
          "url": "https://github.com/py-pdf/PyPDF2/commit/9941099b80dee1db6bfc747535b9d822b0fb0617"
        },
        "date": 1650718254429,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.9236413346619341,
            "unit": "iter/sec",
            "range": "stddev: 0.004035420224873149",
            "extra": "mean: 1.0826713384000015 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 9.939253390400175,
            "unit": "iter/sec",
            "range": "stddev: 0.0038204766514719417",
            "extra": "mean: 100.61117879999415 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jensg@posteo.de",
            "name": "dsk7",
            "username": "dsk7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6c56f550bb384e05f0139c796ba1308837d6373",
          "message": "MAINT: Quadratic runtime while parsing reduced to linear  (#808)\n\nWhen the PdfFileReader tries to find the xref marker, the readNextEndLine methods builds a so called line by reading byte-for-byte. Every time a new byte is read, it is concatenated with the currently read line. This leads to quadratic runtime O(n²) behavior as Python strings (also byte-strings) are immutable and have to be copied where n is the size of the file.\r\nFor files where the xref marker can not be found at the end this takes a enormous amount of time:\r\n\r\n* 1mb of zeros at the end: 45.54 seconds\r\n* 2mb of zeros at the end: 357.04 seconds\r\n(measured on a laptop made in 2015)\r\n\r\nThis pull request changes the relevant section of the code to become linear runtime O(n), leading to a run time of less then a second for both cases mentioned above. Furthermore this PR adds a regression test.",
          "timestamp": "2022-04-23T19:12:13+02:00",
          "tree_id": "808b058c26b46591b397469807b07d8e66b9f34c",
          "url": "https://github.com/py-pdf/PyPDF2/commit/c6c56f550bb384e05f0139c796ba1308837d6373"
        },
        "date": 1650733971283,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.8009431525956788,
            "unit": "iter/sec",
            "range": "stddev: 0.03857775783449113",
            "extra": "mean: 1.2485280593999988 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.39094445470576,
            "unit": "iter/sec",
            "range": "stddev: 0.006776916663739223",
            "extra": "mean: 119.17609577777455 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4c8cab3292ccc52117ad1b38a10262640dfc158",
          "message": "BUG: Fix PDFDocEncoding Character Set (#809)\n\nCloses #151",
          "timestamp": "2022-04-23T22:27:38+02:00",
          "tree_id": "0b6a206e03da2af191d7509479c739e2d3f99f89",
          "url": "https://github.com/py-pdf/PyPDF2/commit/d4c8cab3292ccc52117ad1b38a10262640dfc158"
        },
        "date": 1650745704204,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5706882244432586,
            "unit": "iter/sec",
            "range": "stddev: 0.014223725815557052",
            "extra": "mean: 1.752270254000004 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.80955246084517,
            "unit": "iter/sec",
            "range": "stddev: 0.004528453099679591",
            "extra": "mean: 113.51314433333452 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1be80dff6b3dee50fe742ad39ddc9621785dd4f",
          "message": "BUG: Improve spacing for text extraction (#806)\n\nPyPDF2 now takes positive / negative spaces between text blocks into account. Not very elegant, but the result looks way better than before.",
          "timestamp": "2022-04-23T22:49:16+02:00",
          "tree_id": "0a6aa3c32ef620aef177d4b8768221b45e0b7202",
          "url": "https://github.com/py-pdf/PyPDF2/commit/d1be80dff6b3dee50fe742ad39ddc9621785dd4f"
        },
        "date": 1650746991936,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6484490309962616,
            "unit": "iter/sec",
            "range": "stddev: 0.004707152661956923",
            "extra": "mean: 1.5421412511999961 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.089894095260362,
            "unit": "iter/sec",
            "range": "stddev: 0.0007410550961924088",
            "extra": "mean: 99.10906800000419 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3247e8d531b7dd35ca1c55a5bed5ea4151b9fa8",
          "message": "ENH: Add papersizes (#800)",
          "timestamp": "2022-04-24T06:03:50+02:00",
          "tree_id": "966fb1ac42051614b11acae333b07bb52398e051",
          "url": "https://github.com/py-pdf/PyPDF2/commit/b3247e8d531b7dd35ca1c55a5bed5ea4151b9fa8"
        },
        "date": 1650773067691,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5540552761217961,
            "unit": "iter/sec",
            "range": "stddev: 0.0049744553903781135",
            "extra": "mean: 1.804874067800003 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.949716349828208,
            "unit": "iter/sec",
            "range": "stddev: 0.0008507589272494641",
            "extra": "mean: 111.73538477777514 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75410478227a396886be41b336aaefb201ac92cf",
          "message": "DOC: The PDF Format + commit prefixes (#810)",
          "timestamp": "2022-04-24T07:12:39+02:00",
          "tree_id": "749b17278ac678804df14095f3d9ffdfee7720c2",
          "url": "https://github.com/py-pdf/PyPDF2/commit/75410478227a396886be41b336aaefb201ac92cf"
        },
        "date": 1650777194088,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6479789131674737,
            "unit": "iter/sec",
            "range": "stddev: 0.003677746212021266",
            "extra": "mean: 1.543260096399996 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.12288684932602,
            "unit": "iter/sec",
            "range": "stddev: 0.006132508373283311",
            "extra": "mean: 98.78604936363384 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6729b8005e3d07ddf858da319e1ce27784368d88",
          "message": "DOC: CMaps (#811)",
          "timestamp": "2022-04-24T11:30:59+02:00",
          "tree_id": "0e168da055bb6a4f07ccb33287a14b730d4daa8d",
          "url": "https://github.com/py-pdf/PyPDF2/commit/6729b8005e3d07ddf858da319e1ce27784368d88"
        },
        "date": 1650792707218,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5062473877039959,
            "unit": "iter/sec",
            "range": "stddev: 0.020347651861574872",
            "extra": "mean: 1.9753188347999981 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 7.8468491530427995,
            "unit": "iter/sec",
            "range": "stddev: 0.007294014757637078",
            "extra": "mean: 127.43968700000133 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "f48b4acb5c1578fceb9fa97153583489cc4d164e",
          "message": "DEV: Adjust performance benchmark",
          "timestamp": "2022-04-24T13:21:27+02:00",
          "tree_id": "634289bb4f5e46222b399606562d13abad9a95fa",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f48b4acb5c1578fceb9fa97153583489cc4d164e"
        },
        "date": 1650799332627,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6476011688384089,
            "unit": "iter/sec",
            "range": "stddev: 0.013645267097183788",
            "extra": "mean: 1.5441602765999989 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.24335243186828,
            "unit": "iter/sec",
            "range": "stddev: 0.005659092465901196",
            "extra": "mean: 97.62428918181922 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "663ca9899fcd98630727c235278f114ea75533de",
          "message": "ROB: Use null ID when encrypted but no ID given (#812)\n\nIf no '/ID' key is present in self.trailer an array of two empty bytestrings is used in place of an '/ID'. This is how Apache PDFBox handles this case.\r\n\r\nThis makes PyPDF2 more robust to malformed PDFs.\r\n\r\nCloses #608\r\nCloses #610\r\n\r\nFull credit for this one to Richard Millson - Martin Thoma only fixed a merge conflict\r\n\r\nCo-authored-by: Richard Millson <8217613+richardmillson@users.noreply.github.com>",
          "timestamp": "2022-04-24T13:30:33+02:00",
          "tree_id": "6a4e8497c6589f5375088f1d77c909b865bfcece",
          "url": "https://github.com/py-pdf/PyPDF2/commit/663ca9899fcd98630727c235278f114ea75533de"
        },
        "date": 1650799875942,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.541893603172852,
            "unit": "iter/sec",
            "range": "stddev: 0.019628717523265633",
            "extra": "mean: 1.8453807059999974 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.78432658130401,
            "unit": "iter/sec",
            "range": "stddev: 0.0025973099354251743",
            "extra": "mean: 113.83911911111493 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63b4c91f4f466fa6fb9e256af3cadc11bb8e4a05",
          "message": "BUG: TypeError in xmp._converter_date (#813)\n\nFix: Convert decimal to int before passing it to datetime\r\n\r\nCloses #774",
          "timestamp": "2022-04-24T13:46:20+02:00",
          "tree_id": "33563b704555604f79db8e5c1737c3c781aa9546",
          "url": "https://github.com/py-pdf/PyPDF2/commit/63b4c91f4f466fa6fb9e256af3cadc11bb8e4a05"
        },
        "date": 1650800821542,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5308827521609454,
            "unit": "iter/sec",
            "range": "stddev: 0.07265480137831483",
            "extra": "mean: 1.8836550932000038 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.928300240309044,
            "unit": "iter/sec",
            "range": "stddev: 0.007008704187200776",
            "extra": "mean: 112.0034018888892 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc7219360978dfb593fc4275e76b6f3057972c9",
          "message": "MAINT: Validate PDF magic byte in strict mode (#814)\n\nCloses #626",
          "timestamp": "2022-04-24T14:51:19+02:00",
          "tree_id": "fac05cd2ef17e2fdd9a43ce133b252c299455a62",
          "url": "https://github.com/py-pdf/PyPDF2/commit/5bc7219360978dfb593fc4275e76b6f3057972c9"
        },
        "date": 1650804720365,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5968691930782724,
            "unit": "iter/sec",
            "range": "stddev: 0.10524568460776369",
            "extra": "mean: 1.6754089700000008 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 9.975065944299576,
            "unit": "iter/sec",
            "range": "stddev: 0.0069488832822520805",
            "extra": "mean: 100.2499638181808 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "e673a6eb2dc9b2207a144d253f2504739655f461",
          "message": "DEV: Minor fix in make_changelog.py",
          "timestamp": "2022-04-24T15:30:16+02:00",
          "tree_id": "ec4435cfb572d70414b43320a4df5d94432b0e0c",
          "url": "https://github.com/py-pdf/PyPDF2/commit/e673a6eb2dc9b2207a144d253f2504739655f461"
        },
        "date": 1650807055894,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6580371905513777,
            "unit": "iter/sec",
            "range": "stddev: 0.0040697971114903985",
            "extra": "mean: 1.5196709461999973 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.018692922795166,
            "unit": "iter/sec",
            "range": "stddev: 0.00440530782071321",
            "extra": "mean: 99.81341954545155 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "22033d724e0c8a684c5aca1d390deedb4331a273",
          "message": "REL: 1.27.9\n\nA change I would like to highlight is the performance improvement for\nlarge PDF files (#808) 🎉\n\nNew Features (ENH):\n-  Add papersizes (#800)\n-  Allow setting permission flags when encrypting (#803)\n-  Allow setting form field flags (#802)\n\nBug Fixes (BUG):\n-  TypeError in xmp._converter_date (#813)\n-  Improve spacing for text extraction (#806)\n-  Fix PDFDocEncoding Character Set (#809)\n\nRobustness (ROB):\n-  Use null ID when encrypted but no ID given (#812)\n-  Handle recursion error (#804)\n\nDocumentation (DOC):\n-  CMaps (#811)\n-  The PDF Format + commit prefixes (#810)\n-  Add compression example (#792)\n\nDeveloper Experience (DEV):\n-  Add Benchmark for Performance Testing (#781)\n\nMaintenance (MAINT):\n-  Validate PDF magic byte in strict mode (#814)\n-  Make PdfFileMerger.addBookmark() behave life PdfFileWriters\\' (#339)\n-  Quadratic runtime while parsing reduced to linear  (#808)\n\nTesting (TST):\n-  Newlines in text extraction (#807)\n\nFull Changelog: https://github.com/py-pdf/PyPDF2/compare/1.27.8...1.27.9",
          "timestamp": "2022-04-24T15:32:00+02:00",
          "tree_id": "87103a760ba5e5826c6472d92e28e22513835231",
          "url": "https://github.com/py-pdf/PyPDF2/commit/22033d724e0c8a684c5aca1d390deedb4331a273"
        },
        "date": 1650807175210,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5705970637383673,
            "unit": "iter/sec",
            "range": "stddev: 0.006161448737138847",
            "extra": "mean: 1.752550203200002 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 9.321006282639642,
            "unit": "iter/sec",
            "range": "stddev: 0.0016392937995490596",
            "extra": "mean: 107.28455380000099 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39215c704791c10189668bbd1fa1d04d0b1f3f81",
          "message": "DOC: More details on text parsing issues (#815)",
          "timestamp": "2022-04-24T16:29:40+02:00",
          "tree_id": "cf2929720a034465cd1497ceb5d50ef283785b74",
          "url": "https://github.com/py-pdf/PyPDF2/commit/39215c704791c10189668bbd1fa1d04d0b1f3f81"
        },
        "date": 1650810620707,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5266091808541599,
            "unit": "iter/sec",
            "range": "stddev: 0.04462753547546615",
            "extra": "mean: 1.8989414471999908 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.53769833696998,
            "unit": "iter/sec",
            "range": "stddev: 0.006891337436723719",
            "extra": "mean: 117.12758644443966 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80f2f2572d2602f37e0ed3be34ef95d5df62a278",
          "message": "DOC: PDF feature/version support (#816)",
          "timestamp": "2022-04-24T17:15:49+02:00",
          "tree_id": "2da7f003dd39086e84797959d37cb6e663394948",
          "url": "https://github.com/py-pdf/PyPDF2/commit/80f2f2572d2602f37e0ed3be34ef95d5df62a278"
        },
        "date": 1650813390431,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.49904665714763946,
            "unit": "iter/sec",
            "range": "stddev: 0.016996534436094574",
            "extra": "mean: 2.003820656200001 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 7.91783474963698,
            "unit": "iter/sec",
            "range": "stddev: 0.005104605993043909",
            "extra": "mean: 126.29715466666546 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10ccbae325e875432a9980c4b78758203b728f33",
          "message": "TST: Add test for filters.ASCIIHexDecode (#822)\n\nFull Credit goes to https://github.com/py-pdf/PyPDF2/pull/817/commits/5c74416e6cb9675628975f12528ca908c554bb63\r\nwho wrote the test in 2018 for PyPDF4\r\n\r\nCo-authored-by: Acsor <nildexo@yandex.com>",
          "timestamp": "2022-04-25T21:53:25+02:00",
          "tree_id": "7ad67406b3aee8c71ae7848fddb8f4d705bc3f3c",
          "url": "https://github.com/py-pdf/PyPDF2/commit/10ccbae325e875432a9980c4b78758203b728f33"
        },
        "date": 1650916454674,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.4993369078003011,
            "unit": "iter/sec",
            "range": "stddev: 0.026954339188757847",
            "extra": "mean: 2.002655891000006 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.302262730048474,
            "unit": "iter/sec",
            "range": "stddev: 0.0012979079016196592",
            "extra": "mean: 120.44909111111224 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39ffc1d6265e1b710d87cd6fc1a5f6b270978090",
          "message": "TST: Add test for FlateDecode (#823)\n\nFull credit to\r\nhttps://github.com/py-pdf/PyPDF2/pull/817/commits/9f628b3989b2f9714db9eb850bed323329a61922\r\nwho added the test in 2018 to PyPDF4\r\n\r\nCo-authored-by: Acsor <nildexo@yandex.com>",
          "timestamp": "2022-04-25T22:38:54+02:00",
          "tree_id": "1406b92bec2277732129a7c71c9e5d0bf03b3e9e",
          "url": "https://github.com/py-pdf/PyPDF2/commit/39ffc1d6265e1b710d87cd6fc1a5f6b270978090"
        },
        "date": 1650919175534,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.533021892422493,
            "unit": "iter/sec",
            "range": "stddev: 0.04128214521394912",
            "extra": "mean: 1.8760955491999993 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.931744670108035,
            "unit": "iter/sec",
            "range": "stddev: 0.0009845891608524406",
            "extra": "mean: 111.96020900000765 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "963b25159a69eb3264cb7179082fe6ffce16126b",
          "message": "TST: Use external repository for larger/more PDFs for testing (#820)\n\n* Use submodule so that the connection is clear. Ensure that Flake8 issues of the submodule don't show up here\r\n* As a first step, just try to get the number of pages from the non-encrypted PDFs\r\n* Create an \"external\" pytest marker which allows people to deactivate tests that need the submodule",
          "timestamp": "2022-04-26T17:02:57+02:00",
          "tree_id": "c2f56b9f16c0df0b78500c475fe2e36d672a47be",
          "url": "https://github.com/py-pdf/PyPDF2/commit/963b25159a69eb3264cb7179082fe6ffce16126b"
        },
        "date": 1650985417517,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6455807745487593,
            "unit": "iter/sec",
            "range": "stddev: 0.009333597564409836",
            "extra": "mean: 1.5489928439999914 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.110828960054192,
            "unit": "iter/sec",
            "range": "stddev: 0.007821850869459548",
            "extra": "mean: 98.90385881818341 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96d8d0f937dbffc867f0d49d66f5c40b36bb431d",
          "message": "TST: Add Test for ASCII85Decode (#825)\n\nFull credit to\r\nhttps://github.com/py-pdf/PyPDF2/pull/817/commits/6dc90b1e64c1965b61aa2561ce912f64ca19cad4\r\n\r\nCo-authored-by: Acsor <nildexo@yandex.com>",
          "timestamp": "2022-04-26T18:20:09+02:00",
          "tree_id": "02a47e5754b4e83a52ebb6301118b24d837ef7ed",
          "url": "https://github.com/py-pdf/PyPDF2/commit/96d8d0f937dbffc867f0d49d66f5c40b36bb431d"
        },
        "date": 1650990044230,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6541198244177866,
            "unit": "iter/sec",
            "range": "stddev: 0.003829907124529457",
            "extra": "mean: 1.5287718896000002 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.085985833131874,
            "unit": "iter/sec",
            "range": "stddev: 0.0006931207886781686",
            "extra": "mean: 99.1474721999964 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "355f805f30e493cda2af134ccb768edccf3ff0ab",
          "message": "DEV: Ignore IronPython parts for code coverage (#826)\n\nI have no idea how to test for that in GithubActions.\r\nAs this likely only affects a small fraction of PyPDF2 users,\r\nI want to ignore it for now.\r\n\r\nFeel free to add a PR that adds IronPython to GithubActions -\r\nthen we can enable this again.",
          "timestamp": "2022-04-26T18:30:53+02:00",
          "tree_id": "c399e5e719e31fdc84ae2cd3b91082c21b3bb121",
          "url": "https://github.com/py-pdf/PyPDF2/commit/355f805f30e493cda2af134ccb768edccf3ff0ab"
        },
        "date": 1650990689658,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.652312710979302,
            "unit": "iter/sec",
            "range": "stddev: 0.008901747430670692",
            "extra": "mean: 1.5330070734000003 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.376939144749729,
            "unit": "iter/sec",
            "range": "stddev: 0.0060005167688021105",
            "extra": "mean: 96.36753054545527 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f90a9d7140a9cddcc60cc1f17a695ca2b363af39",
          "message": "TST: Add tests for utils, form fields, PageRange (#827)\n\ngetFormTextFields now return an empty dict instead of throwing an exception if no form fields are found. This should eliminate an error source",
          "timestamp": "2022-04-26T22:20:02+02:00",
          "tree_id": "4e8432ad79fb24f91acc3e0cf86d42a6259aff1d",
          "url": "https://github.com/py-pdf/PyPDF2/commit/f90a9d7140a9cddcc60cc1f17a695ca2b363af39"
        },
        "date": 1651004444445,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5339640513290262,
            "unit": "iter/sec",
            "range": "stddev: 0.012493021925103417",
            "extra": "mean: 1.8727852511999998 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.75920949734288,
            "unit": "iter/sec",
            "range": "stddev: 0.00284369106426063",
            "extra": "mean: 114.16555344444627 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35086b6e2c0b45ce4b80e2581e8b27cd12a6d373",
          "message": "STY: Remove debug code (#828)",
          "timestamp": "2022-04-27T08:03:14+02:00",
          "tree_id": "9c32fdaceaabf28b00855dfe80d3eabb7b10481b",
          "url": "https://github.com/py-pdf/PyPDF2/commit/35086b6e2c0b45ce4b80e2581e8b27cd12a6d373"
        },
        "date": 1651039434526,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5350829750413725,
            "unit": "iter/sec",
            "range": "stddev: 0.031613512699053894",
            "extra": "mean: 1.8688690289999983 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.653130659753275,
            "unit": "iter/sec",
            "range": "stddev: 0.004827429409492978",
            "extra": "mean: 115.56511039999862 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4083478+pubpub-zz@users.noreply.github.com",
            "name": "pubpub-zz",
            "username": "pubpub-zz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "904b0df5a2d840d0ef0d1db52c7ee6a114664594",
          "message": "ROB: Fix corruption in startxref or xref table (#788)\n\nUse PdfReadWarning instead of UserWarning to be consistent\r\n\r\nCloses #297",
          "timestamp": "2022-04-27T13:30:31+02:00",
          "tree_id": "9b911b76a3f9a819ee0ca14a104336eeb0bd51db",
          "url": "https://github.com/py-pdf/PyPDF2/commit/904b0df5a2d840d0ef0d1db52c7ee6a114664594"
        },
        "date": 1651059070812,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6500721455982809,
            "unit": "iter/sec",
            "range": "stddev: 0.006260350447390519",
            "extra": "mean: 1.5382907986000078 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.383048126671477,
            "unit": "iter/sec",
            "range": "stddev: 0.005338950545449663",
            "extra": "mean: 96.31083163635233 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd775d34d9ccf8f77596ca9e82944c869901ac0f",
          "message": "MAINT: Refactoring after #788 (#830)\n\nThis refactoring aims at making maintenance easier:\r\n\r\n1. Too long functions make it hard to grasp the overall behavior. Hence the _get_xref_issues function was split out\r\n2. `_get_xref_issues` is made a static method of the PdfFileReader to show that it belongs to the reader, but doesn't require any of its attributes\r\n3. `_get_xref_issues` makes use of an integer return value instead of raising + catching exceptions. \r\n4. `_rebuild_xref_table` was moved to a method for the same reason.",
          "timestamp": "2022-04-27T17:44:09+02:00",
          "tree_id": "beff2babbf9ba4905400267caa89d4e7ddc069ac",
          "url": "https://github.com/py-pdf/PyPDF2/commit/fd775d34d9ccf8f77596ca9e82944c869901ac0f"
        },
        "date": 1651074294887,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6534127715275444,
            "unit": "iter/sec",
            "range": "stddev: 0.0030763372688520432",
            "extra": "mean: 1.5304261618 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.089517366180937,
            "unit": "iter/sec",
            "range": "stddev: 0.0008623789855637931",
            "extra": "mean: 99.11276860000271 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "cb32323a4c2581c0a0c395bbe2320b6ca776c67d",
          "message": "DOC: History of PyPDF2",
          "timestamp": "2022-04-27T17:49:59+02:00",
          "tree_id": "e10220d86b8ceea20c75cbe0939d7972bdabee71",
          "url": "https://github.com/py-pdf/PyPDF2/commit/cb32323a4c2581c0a0c395bbe2320b6ca776c67d"
        },
        "date": 1651074640781,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6502136222433015,
            "unit": "iter/sec",
            "range": "stddev: 0.003251982470534682",
            "extra": "mean: 1.5379560897999967 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.026016520294906,
            "unit": "iter/sec",
            "range": "stddev: 0.0008580678769596281",
            "extra": "mean: 99.74050989999625 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcd1aed0f762d5c26eba9bcdff4eb8e0eb39ca8f",
          "message": "TST: Add tests for PyPDF2.generic (#831)\n\n* BUG: StopIteration got deprecated in Python 3.7, see PEP 479\r\n* STY: Use property decorator\r\n\r\nCo-authored-by: Matthew Peveler <matt.peveler@gmail.com>",
          "timestamp": "2022-04-28T10:39:51+02:00",
          "tree_id": "3a9c71f52bc2f5e6cee461016ef1d1ad21078f00",
          "url": "https://github.com/py-pdf/PyPDF2/commit/fcd1aed0f762d5c26eba9bcdff4eb8e0eb39ca8f"
        },
        "date": 1651135253971,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5520707881894535,
            "unit": "iter/sec",
            "range": "stddev: 0.018268466912576466",
            "extra": "mean: 1.811361914800011 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.792815022718578,
            "unit": "iter/sec",
            "range": "stddev: 0.0010336042124188555",
            "extra": "mean: 113.72922066667319 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "865d74433e2b776ee131663f984e52dc083dca70",
          "message": "MAINT: Update requirements files",
          "timestamp": "2022-04-28T11:02:26+02:00",
          "tree_id": "4f0d14b4f16561868c2203cb124fb3c6afa0e446",
          "url": "https://github.com/py-pdf/PyPDF2/commit/865d74433e2b776ee131663f984e52dc083dca70"
        },
        "date": 1651136596364,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6415824680643019,
            "unit": "iter/sec",
            "range": "stddev: 0.006028124875887984",
            "extra": "mean: 1.5586460818000034 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.189942048271186,
            "unit": "iter/sec",
            "range": "stddev: 0.006762608643911026",
            "extra": "mean: 98.13598499999898 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eef03d935dfeacaa75848b39082cf94d833d3174",
          "message": "STY: Apply pre-commit (black, isort) + use snake_case variables (#832)\n\nThis change standardizes the code formatting quite a bit.\r\nHaving standardized formatting makes the code easier to read\r\nand reduces the diff.\r\n\r\nThis includes:\r\n\r\n* Applying the black auto-formatter (also in the docs)\r\n* Applying isort for import sorting\r\n* Making sure that files end with a newline\r\n\r\nAdditionally, in several places the property function call style was replaced by the decorator style",
          "timestamp": "2022-04-28T11:53:18+02:00",
          "tree_id": "93562802485ae6a26ff05fad3cf13e3a33bdb00a",
          "url": "https://github.com/py-pdf/PyPDF2/commit/eef03d935dfeacaa75848b39082cf94d833d3174"
        },
        "date": 1651139639035,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.744978809967256,
            "unit": "iter/sec",
            "range": "stddev: 0.0047688953823038305",
            "extra": "mean: 1.3423200587999986 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 11.643426095476853,
            "unit": "iter/sec",
            "range": "stddev: 0.005384084734819235",
            "extra": "mean: 85.88537358333663 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1dfdaa475c8705c45d82305f2d2ec76168e7e30",
          "message": "TST: Reader and page properties (#835)",
          "timestamp": "2022-04-28T12:45:14+02:00",
          "tree_id": "4cf4b3c640d71220342496b9bb66ef1ee07d06ea",
          "url": "https://github.com/py-pdf/PyPDF2/commit/c1dfdaa475c8705c45d82305f2d2ec76168e7e30"
        },
        "date": 1651142754261,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5525941267582756,
            "unit": "iter/sec",
            "range": "stddev: 0.004335068924803803",
            "extra": "mean: 1.8096464503999983 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 8.918099518311225,
            "unit": "iter/sec",
            "range": "stddev: 0.0013836104991058473",
            "extra": "mean: 112.13151388888794 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1408f7488f2df54341b1208f2ad0a1b14eb8e81",
          "message": "MAINT: Split pdf module (#836)",
          "timestamp": "2022-04-28T14:40:53+02:00",
          "tree_id": "0620d6908a07c4249190ebf5952edde1bd138176",
          "url": "https://github.com/py-pdf/PyPDF2/commit/e1408f7488f2df54341b1208f2ad0a1b14eb8e81"
        },
        "date": 1651149694527,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6511333754112755,
            "unit": "iter/sec",
            "range": "stddev: 0.005939225208470314",
            "extra": "mean: 1.5357836623999959 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.28649261251013,
            "unit": "iter/sec",
            "range": "stddev: 0.006082521245230465",
            "extra": "mean: 97.21486590908833 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matt.peveler@gmail.com",
            "name": "Matthew Peveler",
            "username": "MasterOdin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c7d6e8bc1908dd179383397a605133cf1d83939",
          "message": "TST: swap incorrect test names (#838)",
          "timestamp": "2022-04-28T16:11:12+02:00",
          "tree_id": "3981c3cda471e4d14157fb0b97f1aac4b93cdec7",
          "url": "https://github.com/py-pdf/PyPDF2/commit/5c7d6e8bc1908dd179383397a605133cf1d83939"
        },
        "date": 1651155110130,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6615813811562604,
            "unit": "iter/sec",
            "range": "stddev: 0.0046065495210667684",
            "extra": "mean: 1.5115298412000016 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.00428368875864,
            "unit": "iter/sec",
            "range": "stddev: 0.004433978733442472",
            "extra": "mean: 99.95718145454578 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e86977813d9714e9383a5b2801e26d57a16a86d",
          "message": "ROB: warn-only in readStringFromStream (#837)\n\nAn unexpected escape string was raising a PdfReadError before.\r\nNow, only a warning is issued.\r\n\r\nCloses #360\r\nCloses #794 : Passing the strict parameter looks like a good idea,\r\n              but there is also the pdf parameter. Sadly, it is\r\n              None for that issue.",
          "timestamp": "2022-04-28T16:18:18+02:00",
          "tree_id": "8059010d5156444397416dc2e9b56b64e45f5437",
          "url": "https://github.com/py-pdf/PyPDF2/commit/5e86977813d9714e9383a5b2801e26d57a16a86d"
        },
        "date": 1651155537175,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6544444290869603,
            "unit": "iter/sec",
            "range": "stddev: 0.0032139339956374427",
            "extra": "mean: 1.5280136182000006 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.13957595768099,
            "unit": "iter/sec",
            "range": "stddev: 0.0007348270835737484",
            "extra": "mean: 98.62345370000156 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4083478+pubpub-zz@users.noreply.github.com",
            "name": "pubpub-zz",
            "username": "pubpub-zz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fe9e6ef0e547a044cfa7ec6df6e76452cc09c10",
          "message": "ROB: Handle missing destinations in reader (#840)\n\nIf a destination is missing, getDestinationPageNumber now returns -1\r\nIf `strict=False`, the first page is used as a fallback.\r\n\r\nThe code triggering the exception was\r\n\r\n```python\r\nfrom PyPDF2 import PdfFileReader\r\n\r\n# https://github.com/mstamy2/PyPDF2/files/6045010/thyroid.pdf\r\nwith open(\"thyroid.pdf\", \"rb\") as f:\r\n   reader = PdfFileReader(f)\r\n   bookmarks = pdf.getOutlines()\r\n   for b in bookmarks:\r\n       print(reader.getDestinationPageNumber(b) + 1)  # page count starts from 0\r\n```\r\n\r\nThe error message was:\r\n    PyPDF2.utils.PdfReadError: Unknown Destination Type: 0\r\n\r\nCloses #604 \r\nCloses #821",
          "timestamp": "2022-04-30T20:13:24+02:00",
          "tree_id": "5db3305fbfb9b628d599904682d8f840cd1734f5",
          "url": "https://github.com/py-pdf/PyPDF2/commit/3fe9e6ef0e547a044cfa7ec6df6e76452cc09c10"
        },
        "date": 1651342444178,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6549521794964375,
            "unit": "iter/sec",
            "range": "stddev: 0.006425753643669064",
            "extra": "mean: 1.5268290286000024 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.295506195647757,
            "unit": "iter/sec",
            "range": "stddev: 0.006403111875990784",
            "extra": "mean: 97.12975554545653 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "444fca22836df061d9d23e71ffb7d68edcdfa766",
          "message": "STY: Documentation, Variable names (#839)\n\n* pytest style\r\n* use more constants",
          "timestamp": "2022-04-30T20:19:26+02:00",
          "tree_id": "13153ced2b968d63d1003bb6128dd3e12f7b2fd7",
          "url": "https://github.com/py-pdf/PyPDF2/commit/444fca22836df061d9d23e71ffb7d68edcdfa766"
        },
        "date": 1651342801039,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.7273790759126576,
            "unit": "iter/sec",
            "range": "stddev: 0.0041930713218297855",
            "extra": "mean: 1.3747989640000013 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 11.613264540689384,
            "unit": "iter/sec",
            "range": "stddev: 0.005972794829883468",
            "extra": "mean: 86.10843200000318 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2ed8e593bedeca0cc6283f9d4894a45c7a85323",
          "message": "MAINT: Separated CCITTFax param parsing/decoding (#841)\n\n* BUG: Changed default /K to conform with the PDF 1.7 standard\r\n* TST: Add test for CCITTFax\r\n* TST: Add test for TextStringObject\r\n\r\nSTY:\r\n* Group Python 2.7 imports\r\n* camelCase variables to snake_case\r\n* Apply black formatter",
          "timestamp": "2022-05-01T10:55:00+02:00",
          "tree_id": "c8e20b34d7d1b7804daf4ed0e385cb99d5d02205",
          "url": "https://github.com/py-pdf/PyPDF2/commit/d2ed8e593bedeca0cc6283f9d4894a45c7a85323"
        },
        "date": 1651395337855,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.6595642448645689,
            "unit": "iter/sec",
            "range": "stddev: 0.0027934216538311064",
            "extra": "mean: 1.5161525322000045 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 10.03107597243035,
            "unit": "iter/sec",
            "range": "stddev: 0.004474913223608447",
            "extra": "mean: 99.69020299999958 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7592257855b619d1d13752afac052147377a3c3f",
          "message": "DOC: Project Governance (#799)\n\nThank you Matthew for your support / suggestions!\r\n\r\nCo-authored-by: Matthew Peveler <matt.peveler@gmail.com>",
          "timestamp": "2022-05-01T10:56:30+02:00",
          "tree_id": "dd41e47f40b1052d0966d687b88e2020d3ef7297",
          "url": "https://github.com/py-pdf/PyPDF2/commit/7592257855b619d1d13752afac052147377a3c3f"
        },
        "date": 1651395428249,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5730060597961345,
            "unit": "iter/sec",
            "range": "stddev: 0.018179231162042064",
            "extra": "mean: 1.745182241799995 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 9.116730914362284,
            "unit": "iter/sec",
            "range": "stddev: 0.0012190247077632514",
            "extra": "mean: 109.6884408888962 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "be6cdd8864075ba08e789c2b5b0b83b16fc6ea9e",
          "message": "DEV: Add benchmark command to Makefile",
          "timestamp": "2022-05-01T11:08:03+02:00",
          "tree_id": "57cc50e2e0749d944b412c468589ae5a1beaaccb",
          "url": "https://github.com/py-pdf/PyPDF2/commit/be6cdd8864075ba08e789c2b5b0b83b16fc6ea9e"
        },
        "date": 1651396126499,
        "tool": "pytest",
        "benches": [
          {
            "name": "Tests/bench.py::test_page_operations",
            "value": 0.5648025130939326,
            "unit": "iter/sec",
            "range": "stddev: 0.028904580240274903",
            "extra": "mean: 1.7705303656000013 sec\nrounds: 5"
          },
          {
            "name": "Tests/bench.py::test_merge",
            "value": 9.228001369841428,
            "unit": "iter/sec",
            "range": "stddev: 0.004177987880058724",
            "extra": "mean: 108.36582700000008 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}