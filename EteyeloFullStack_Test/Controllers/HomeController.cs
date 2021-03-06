﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EteyeloFullStack_Test.Models;
using EteyeloFullStack_Test.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace EteyeloFullStack_Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly AppServices _appServices;

        public HomeController(AppServices appServices)
        {
            _appServices = appServices;
        }

        //get all institu from  Document and their students
        [HttpGet]
        [Route("api/Home/AllInstitus")]
        public ActionResult<List<Institus>> AllInstitus()
            => _appServices.GetInstitus();

        //get one chosen institu
        [HttpGet]
        [Route("api/Home/GetById")]
        public ActionResult<Institus> GetInstitu(string id)
            => _appServices.GetById(id);

        //delete specifique institut
        [HttpPost]
        [Route("api/Home/DeleteInstitu")]
        public ActionResult DeleteInstitu(string id)
        {
            try
            {
                _appServices.DeleteInstitu(id);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.Message.ToString());
            }
        }

        //add new one (institut)
        [HttpPost]
        [Route("api/Home/NewInstitu")]
        public ActionResult NewInstitu([Bind("InstituName,InstituPhone,etudiants")] Institus institus)
        {
            try
            {
                _appServices.NewInstitu(institus);

                return Ok();
            }
            catch (MongoClientException e)
            {
                return Ok(e.Message.ToString());
            }
        }

        //Update related intitute information
        [HttpPost]
        [Route("api/Home/UpdateInstitu")]
        public ActionResult UpdateInstitu(string id, [Bind("InstituName,InstituPhone,etudiants")] Institus institus)
        {
            try
            {
                _appServices.UpdateInstitu(id, institus);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.Message.ToString());
            }
        }

        //id = institut.id
        //adding new student to specifique institut
        [HttpPost]
        [Route("api/Home/NewInstituStudent")]
        public ActionResult NewInstituStudent(string id, [Bind("FirstName,LastName,promo")] Etudiant etudiant)
        {
            try
            {
                _appServices.NewInstituStudent(id, etudiant);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.Message.ToString());
            }
        }

        //update intitut specifique student
        [HttpPost]
        [Route("api/Home/UpdateStuden")]
        public ActionResult UpdateStuden(string id, string keyword, [Bind("FirstName,LastName,promo")] Etudiant etudiant)
        {
            try
            {
                _appServices.UpdateStuden(id, keyword, etudiant);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.Message.ToString());
            }
        }

        //getting details on one student
        [HttpGet]
        [Route("api/Home/DetailsStudent")]
        public ActionResult DetailsStudent(string id, string keyword)
        {
            try
            {
                _appServices.DetailsStudent(id, keyword);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.Message.ToString());
            }
        }

        //deleting specifique 
        [HttpGet]
        [Route("api/Home/DeletStudent")]
        public ActionResult DeletStudent(string id, string Keyword)
        {
            try
            {
                _ = _appServices.DeletStudentAsync(id, Keyword);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.Message.ToString());
            }
        }
    }
}
