<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\TesttableRepositoryInterface;

class TesttableController extends Controller
{
    protected TesttableRepositoryInterface $testtableRepository;
    protected Request $request;

    public function __construct(TesttableRepositoryInterface $testtableRepository, Request $request)
    {
        $this->testtableRepository = $testtableRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->testtableRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="testtable.csv"');
            $rows = $payload['rows'];
            $fields = array('id','Testfield',

        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['testfield'],

        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->testtableRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->testtableRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->testtableRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->testtableRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->testtableRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->testtableRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

